import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaStar, FaArrowRight, FaGem, FaDraftingCompass, FaMagic, FaWhatsapp } from 'react-icons/fa';
import './CinematicInterior.css';

gsap.registerPlugin(ScrollTrigger);

const animationConfig = {
    framePath: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    totalFrames: 240,
    scrollHeight: "450vh",
    preloadCount: 15,
};

const CinematicInterior = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);
    const textRef4 = useRef(null);

    const [loadedPercent, setLoadedPercent] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const imagesRef = useRef([]);
    const frameIndexRef = useRef(0);

    const getFrameUrl = (index) => {
        const paddedIndex = (index + 1).toString().padStart(5, '0');
        return `${animationConfig.framePath}${animationConfig.framePrefix}${paddedIndex}${animationConfig.frameExtension}`;
    };

    useEffect(() => {
        const images = new Array(animationConfig.totalFrames);
        let loadedCount = 0;
        let isCancelled = false;

        const loadNextFrame = (index) => {
            if (isCancelled || index >= animationConfig.totalFrames) return;

            const img = new Image();
            img.src = getFrameUrl(index);
            
            const onLoadOrError = () => {
                if (isCancelled) return;
                
                images[index] = img.complete && img.naturalHeight !== 0 ? img : (images[index - 1] || null);
                loadedCount++;
                setLoadedPercent(Math.floor((loadedCount / animationConfig.totalFrames) * 100));

                if (loadedCount >= animationConfig.preloadCount && !isReady) {
                    setIsReady(true);
                }
                
                loadNextFrame(index + 1);
            };

            img.onload = onLoadOrError;
            img.onerror = onLoadOrError;
        };

        const firstImg = new Image();
        firstImg.src = getFrameUrl(0);
        firstImg.onload = () => {
            if (isCancelled) return;
            images[0] = firstImg;
            loadedCount++;
            imagesRef.current = images;
            setIsReady(true);
            loadNextFrame(1);
        };
        firstImg.onerror = () => {
             console.error("Failed to load initial frame");
             setIsReady(true);
        }

        return () => {
            isCancelled = true;
        };
    }, []);

    useEffect(() => {
        if (!isReady || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: false }); // Optimize performance
        const images = imagesRef.current;

        const resizeCanvas = () => {
            // Full HD / High-DPI (Retina/4K) resolution scaling
            const dpr = Math.max(window.devicePixelRatio || 1, 2);
            canvas.width = Math.floor(window.innerWidth * dpr);
            canvas.height = Math.floor(window.innerHeight * dpr);
            renderFrame(frameIndexRef.current);
        };

        const renderFrame = (index) => {
            const intIndex = Math.round(index);
            frameIndexRef.current = intIndex;
            
            let imgToDraw = images[intIndex];
            if (!imgToDraw || !imgToDraw.complete) {
                for (let i = intIndex; i >= 0; i--) {
                    if (images[i] && images[i].complete) {
                        imgToDraw = images[i];
                        break;
                    }
                }
            }

            if (imgToDraw && imgToDraw.complete) {
                // High Quality Scaling Quality for Crisp Full HD Detail
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';

                const hRatio = canvas.width / imgToDraw.width;
                const vRatio = canvas.height / imgToDraw.height;
                const ratio = Math.max(hRatio, vRatio);
                const centerShift_x = (canvas.width - imgToDraw.width * ratio) / 2;
                const centerShift_y = (canvas.height - imgToDraw.height * ratio) / 2;
                
                requestAnimationFrame(() => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(imgToDraw, 0, 0, imgToDraw.width, imgToDraw.height,
                        centerShift_x, centerShift_y, imgToDraw.width * ratio, imgToDraw.height * ratio);
                });
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const playhead = { frame: 0 };

        const st = ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.15,
            animation: gsap.to(playhead, {
                frame: animationConfig.totalFrames - 1,
                ease: "none",
                onUpdate: () => renderFrame(playhead.frame)
            })
        });

        // ── INTRO ANIMATION: Show Slide 1 immediately on load (NO blur) ──
        if (textRef1.current) {
            gsap.set(textRef1.current, { opacity: 0, y: 60, scale: 0.97 });
            gsap.to(textRef1.current, {
                opacity: 1, y: 0, scale: 1,
                duration: 1.4,
                delay: 0.3,
                ease: 'power3.out',
            });
        }

        // Set other slides hidden initially
        [textRef2, textRef3, textRef4].forEach(ref => {
            if (ref.current) {
                gsap.set(ref.current, { opacity: 0, y: 50, scale: 0.97 });
            }
        });

        // ── SCROLL TIMELINE: Crisp editorial transitions ──
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.6
            }
        });

        // 0 - 20%: Slide 1 exits
        tl.to(textRef1.current, { opacity: 0, y: -50, scale: 1.02, duration: 1, ease: 'power2.in' }, "+=0.8");
        
        // 20 - 45%: Slide 2 enters & exits
        tl.to(textRef2.current, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power2.out' })
          .to(textRef2.current, { opacity: 0, y: -50, scale: 1.02, duration: 1, ease: 'power2.in' }, "+=1.2");

        // 45 - 70%: Slide 3 enters & exits
        tl.to(textRef3.current, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power2.out' })
          .to(textRef3.current, { opacity: 0, y: -50, scale: 1.02, duration: 1, ease: 'power2.in' }, "+=1.2");

        // 70 - 100%: Slide 4 enters & exits
        tl.to(textRef4.current, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power2.out' })
          .to(textRef4.current, { opacity: 0, y: -25, scale: 0.99, duration: 0.8 }, "+=1.5");

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            st.kill();
            tl.kill();
        };
    }, [isReady]);

    return (
        <section ref={containerRef} className="cinematic-container" style={{ height: animationConfig.scrollHeight }}>
            <div className="canvas-wrapper">
                <canvas ref={canvasRef} />
                
                {/* Subtle dark vignette overlay to ensure pristine contrast */}
                <div className="cinematic-vignette" />
                
                {/* Scroll Indicator */}
                <div className="cinematic-scroll-hint">
                    <div className="scroll-mouse">
                        <div className="scroll-wheel" />
                    </div>
                    <span>Scroll to explore</span>
                </div>
                
                <div className="cinematic-overlays">
                    {/* Slide 1 — Visible on load */}
                    <div className="overlay-text overlay-card" ref={textRef1}>
                        <div className="overlay-eyebrow">
                            <span className="eyebrow-dot" />
                            <span>India's Premium Decor Solutions</span>
                        </div>
                        <h2>Transform Your<br />Space</h2>
                        <div className="overlay-accent-line" />
                        <h3 className="overlay-subtitle">With Elegant Architectural Design</h3>
                        <p className="overlay-desc">
                            "At Aangan, we don't just design interiors — we craft moods
                            and build timeless architectural spaces."
                        </p>
                        <div className="overlay-actions">
                            <a href="/interior" className="cinematic-btn primary">
                                Explore Collections
                                <FaArrowRight aria-hidden="true" />
                            </a>
                            <a href="http://wa.me/917069621777" target="_blank" rel="noopener noreferrer" className="cinematic-btn secondary">
                                <FaWhatsapp aria-hidden="true" />
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                    
                    {/* Slide 2 */}
                    <div className="overlay-text overlay-card" ref={textRef2}>
                        <div className="overlay-eyebrow">
                            <span className="eyebrow-dot" />
                            <span>Artisanal Excellence</span>
                        </div>
                        <h2>Crafted With<br />Precision</h2>
                        <div className="overlay-accent-line" />
                        <p className="overlay-desc">
                            Every curve, panel, and material is curated with uncompromised
                            attention to luxury detail.
                        </p>
                        <div className="overlay-chips">
                            <span className="chip"><FaDraftingCompass /> Bespoke Planning</span>
                            <span className="chip"><FaGem /> Handpicked Veneers</span>
                            <span className="chip"><FaMagic /> Seamless Finish</span>
                        </div>
                    </div>
                    
                    {/* Slide 3 */}
                    <div className="overlay-text overlay-card overlay-center" ref={textRef3}>
                        <div className="overlay-eyebrow">
                            <span className="eyebrow-dot" />
                            <span>Tailored Ambience</span>
                        </div>
                        <h2>Designed For<br />Your Lifestyle</h2>
                        <div className="overlay-accent-line" style={{ margin: '0 auto 1.5rem' }} />
                        <p className="overlay-desc">
                            Harmonizing natural textures, intelligent lighting,
                            and ergonomic luxury for everyday living.
                        </p>
                    </div>
                    
                    {/* Slide 4 */}
                    <div className="overlay-text overlay-card" ref={textRef4}>
                        <div className="overlay-eyebrow">
                            <span className="eyebrow-dot" />
                            <span>Your Journey Begins</span>
                        </div>
                        <h2>Bring Your Vision<br />To Life</h2>
                        <div className="overlay-accent-line" />
                        <p className="overlay-desc">
                            Ready to reimagine your residential or commercial sanctuary?
                            Speak with our master designers today.
                        </p>
                        <div className="overlay-actions">
                            <a href="/contact" className="cinematic-btn primary">
                                Start Your Project
                                <FaArrowRight aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CinematicInterior;

