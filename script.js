/**
 * AutoTech Photo Gallery - Pure Vanilla JavaScript Engine
 * No Node.js / zero dependencies needed - runs natively in all browsers
 */

(function () {
  'use strict';

  // 13 Automotive engineering photos dataset
  const photos = [
    {
      src: 'photo_1_2026-10-29_02-32-22.jpg',
      title: 'Gearbox Housing & Input Shaft',
      titleSi: 'ගියර් බොක්ස් නිවාසය සහ ෂාෆ්ට්',
      width: 505,
      height: 760,
      size: '72.8 KB'
    },
    {
      src: 'photo_2_2026-10-29_02-32-22.jpg',
      title: 'Clutch Friction Disc',
      titleSi: 'ක්ලච් ඩිස්ක් තැටිය',
      width: 756,
      height: 1024,
      size: '99.0 KB'
    },
    {
      src: 'photo_3_2026-10-29_02-32-22.jpg',
      title: 'Clutch Assembly Overhaul',
      titleSi: 'ක්ලච් එකලස් කිරීම හා අලුත්වැඩියාව',
      width: 510,
      height: 759,
      size: '63.2 KB'
    },
    {
      src: 'photo_4_2026-10-29_02-32-22.jpg',
      title: 'Dual Clutch & Flywheel Unit',
      titleSi: 'ද්විත්ව ක්ලච් සහ ෆ්ලයිවීල් පද්ධතිය',
      width: 720,
      height: 960,
      size: '80.8 KB'
    },
    {
      src: 'photo_5_2026-10-29_02-32-22.jpg',
      title: 'Air Intake & Sensor Assembly',
      titleSi: 'වායු ඇතුල්වීම් සහ සෙන්සර් පද්ධතිය',
      width: 576,
      height: 1280,
      size: '109.3 KB'
    },
    {
      src: 'photo_6_2026-10-29_02-32-22.jpg',
      title: 'Blower & Cooling Fan Mechanism',
      titleSi: 'සිසිලන ෆෑන් සහ බ්ලෝවර් කොටස',
      width: 576,
      height: 1280,
      size: '93.1 KB'
    },
    {
      src: 'photo_7_2026-10-29_02-32-22.jpg',
      title: 'Hydraulic Clutch Actuator',
      titleSi: 'හයිඩ්‍රොලික් ක්ලච් ඇක්චුවේටරය',
      width: 960,
      height: 1280,
      size: '131.5 KB'
    },
    {
      src: 'photo_8_2026-10-29_02-32-22.jpg',
      title: 'Automotive Control PCB Module',
      titleSi: 'ඉලෙක්ට්‍රොනික පාලක පරිපථ පුවරුව (ECU PCB)',
      width: 1280,
      height: 720,
      size: '130.1 KB'
    },
    {
      src: 'photo_9_2026-10-29_02-32-22.jpg',
      title: 'Hybrid High Voltage Battery Pack',
      titleSi: 'හයිබ්‍රිඩ් බැටරි සෛල පරීක්ෂාව (HV Battery)',
      width: 1280,
      height: 720,
      size: '120.5 KB'
    },
    {
      src: 'photo_10_2026-10-29_02-32-22.jpg',
      title: 'Transmission Actuator Component',
      titleSi: 'ට්‍රාන්ස්මිෂන් ඇක්චුවේටර් ඒකකය',
      width: 576,
      height: 1280,
      size: '100.3 KB'
    },
    {
      src: 'photo_11_2026-10-29_02-32-23.jpg',
      title: 'Clutch Pressure Plate Inspection',
      titleSi: 'ක්ලච් ප්‍රෙෂර් ප්ලේට් පරීක්ෂාව',
      width: 960,
      height: 1280,
      size: '138.8 KB'
    },
    {
      src: 'photo_12_2026-10-29_02-32-23.jpg',
      title: 'Brake Booster & Pump Overhaul',
      titleSi: 'බ්‍රේක් බූස්ටර් සහ පොම්ප ප්‍රතිසංස්කරණය',
      width: 960,
      height: 1280,
      size: '150.9 KB'
    },
    {
      src: 'photo_13_2026-10-29_02-32-23.jpg',
      title: 'Precision Mechanical Overhaul',
      titleSi: 'යාන්ත්‍රික උපාංග අලුත්වැඩියාව',
      width: 838,
      height: 1280,
      size: '127.0 KB'
    }
  ];

  // DOM Elements
  const galleryGrid = document.getElementById('galleryGrid');
  const photoCountEl = document.getElementById('photoCount');
  const networkBadge = document.getElementById('networkBadge');
  const networkStatusText = document.getElementById('networkStatusText');
  const dataSaverBtn = document.getElementById('dataSaverBtn');
  const dataSaverText = document.getElementById('dataSaverText');
  const startSlideshowBtn = document.getElementById('startSlideshowBtn');
  const viewToggleBtns = document.querySelectorAll('.view-toggles .toggle-btn');

  // Lightbox DOM Elements
  const lightbox = document.getElementById('lightbox');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTrack = document.getElementById('lightboxTrack');
  const lightboxStage = document.getElementById('lightboxStage');
  const lightboxSpinner = document.getElementById('lightboxSpinner');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const thumbnailStrip = document.getElementById('thumbnailStrip');
  const downloadBtn = document.getElementById('downloadBtn');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');
  const zoomResetBtn = document.getElementById('zoomResetBtn');
  const zoomPercent = document.getElementById('zoomPercent');
  const lightboxSlideshowBtn = document.getElementById('lightboxSlideshowBtn');
  const slideshowProgress = document.getElementById('slideshowProgress');
  const swipeHint = document.getElementById('swipeHint');
  const toast = document.getElementById('toast');

  // State
  let currentIndex = 0;
  let isLightboxOpen = false;
  let zoomLevel = 1;
  let isPanning = false;
  let startPanX = 0;
  let startPanY = 0;
  let currentTranslateX = 0;
  let currentTranslateY = 0;
  let isSlideshowActive = false;
  let slideshowTimer = null;
  let slideshowIntervalMs = 4000;
  let slideshowStartTimestamp = 0;
  let slideshowReqFrame = null;
  let isDataSaver = false;

  // Touch Swipe State
  let touchStartX = 0;
  let touchStartY = 0;
  let touchCurrentX = 0;
  let touchCurrentY = 0;
  let isSwiping = false;
  let swipeThreshold = 45; // pixels to trigger slide

  // --------------------------------------------------------------------------
  // 1. Initialize and Render Gallery
  // --------------------------------------------------------------------------
  function initGallery() {
    photoCountEl.textContent = photos.length;
    renderGalleryCards();
    renderThumbnailStrip();
    setupNetworkStatus();
    setupEventListeners();
  }

  function renderGalleryCards() {
    galleryGrid.innerHTML = '';
    photos.forEach((photo, index) => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `${photo.titleSi} - ඡායාරූපය ${index + 1}`);

      // Media container with skeleton loader
      const media = document.createElement('div');
      media.className = 'card-media loading';
      // Inline aspect ratio prevents Cumulative Layout Shift (CLS) on slow connections
      media.style.aspectRatio = `${photo.width} / ${photo.height}`;

      const img = document.createElement('img');
      img.alt = photo.titleSi;
      img.loading = 'lazy'; // Native lazy loading for slow connections
      img.decoding = 'async'; // Non-blocking decoding
      img.width = photo.width;
      img.height = photo.height;

      // Progressive load event
      img.addEventListener('load', () => {
        media.classList.remove('loading');
        media.classList.add('loaded');
      });

      // Error handler
      img.addEventListener('error', () => {
        media.classList.remove('loading');
        media.classList.add('loaded');
      });

      img.src = photo.src;
      media.appendChild(img);

      // Card overlay with badges and info
      const overlay = document.createElement('div');
      overlay.className = 'card-overlay';
      overlay.innerHTML = `
        <div class="card-top">
          <span class="index-pill">#${index + 1}</span>
          <div class="expand-icon" title="විශාල කර බලන්න">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M15 3h6v6m0-6L10 14M9 21H3v-6m0 6l11-11"></path>
            </svg>
          </div>
        </div>
        <div class="card-bottom">
          <span class="card-title">${photo.titleSi}</span>
          <div class="card-meta">
            <span>${photo.width}×${photo.height}</span>
            <span>•</span>
            <span>${photo.size}</span>
          </div>
        </div>
      `;

      card.appendChild(media);
      card.appendChild(overlay);

      // Open Lightbox on click or enter/space
      card.addEventListener('click', () => openLightbox(index));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      galleryGrid.appendChild(card);
    });
  }

  function renderThumbnailStrip() {
    thumbnailStrip.innerHTML = '';
    photos.forEach((photo, index) => {
      const thumb = document.createElement('div');
      thumb.className = `thumb-item ${index === currentIndex ? 'active' : ''}`;
      thumb.dataset.index = index;
      thumb.title = `${index + 1}. ${photo.titleSi}`;

      const img = document.createElement('img');
      img.src = photo.src;
      img.alt = `Thumb ${index + 1}`;
      img.loading = 'lazy';

      thumb.appendChild(img);
      thumb.addEventListener('click', () => {
        if (currentIndex !== index) {
          goToSlide(index, index > currentIndex ? 'next' : 'prev');
        }
      });

      thumbnailStrip.appendChild(thumb);
    });
  }

  // --------------------------------------------------------------------------
  // 2. Network & Low Speed Optimizations
  // --------------------------------------------------------------------------
  function setupNetworkStatus() {
    if ('connection' in navigator) {
      const conn = navigator.connection;
      function updateConn() {
        const type = conn.effectiveType; // '4g', '3g', '2g', 'slow-2g'
        const isSlow = type === '2g' || type === 'slow-2g' || type === '3g' || conn.saveData;
        if (isSlow) {
          networkBadge.classList.add('slow');
          networkStatusText.textContent = `අඩු වේගය (${type.toUpperCase()})`;
          enableDataSaver(true);
        } else {
          networkBadge.classList.remove('slow');
          networkStatusText.textContent = `වේගවත් (${type.toUpperCase()})`;
        }
      }
      conn.addEventListener('change', updateConn);
      updateConn();
    } else {
      networkStatusText.textContent = 'සම්බන්ධයි (Online)';
    }

    window.addEventListener('offline', () => {
      networkBadge.classList.add('slow');
      networkStatusText.textContent = 'නොබැඳිව (Offline)';
      showToast('⚠️ අන්තර්ජාල සම්බන්ධතාවය නැත. හැඹිලිගත ඡායාරූප ක්‍රියා කරයි.');
    });

    window.addEventListener('online', () => {
      networkBadge.classList.remove('slow');
      networkStatusText.textContent = 'සම්බන්ධයි (Online)';
      showToast('✅ නැවත සක්‍රීය විය');
    });
  }

  function enableDataSaver(enabled) {
    isDataSaver = enabled;
    if (isDataSaver) {
      dataSaverBtn.classList.add('active');
      dataSaverText.textContent = 'Data Saver: ON';
    } else {
      dataSaverBtn.classList.remove('active');
      dataSaverText.textContent = 'Data Saver';
    }
  }

  // --------------------------------------------------------------------------
  // 3. Lightbox Functions & Horizontal Navigation
  // --------------------------------------------------------------------------
  function openLightbox(index) {
    currentIndex = index;
    isLightboxOpen = true;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Lock background scroll

    loadCurrentPhoto(false);
    updateThumbnailSelection();
    resetZoom();

    // Show temporary swipe hint on mobile
    if (window.innerWidth <= 768) {
      swipeHint.style.display = 'block';
    }
  }

  function closeLightbox() {
    if (!isLightboxOpen) return;
    isLightboxOpen = false;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Unlock scroll

    stopSlideshow();
    resetZoom();
  }

  function loadCurrentPhoto(animateDirection) {
    const photo = photos[currentIndex];
    lightboxCounter.textContent = `${currentIndex + 1} / ${photos.length}`;
    lightboxTitle.textContent = photo.titleSi;
    downloadBtn.href = photo.src;
    downloadBtn.setAttribute('download', photo.src);

    // Show loader
    lightboxSpinner.classList.remove('hidden');
    lightboxImg.style.opacity = '0';

    if (animateDirection) {
      const offset = animateDirection === 'next' ? '40px' : '-40px';
      lightboxTrack.style.transform = `translateX(${offset})`;
      lightboxTrack.style.opacity = '0.5';
    }

    const tempImg = new Image();
    tempImg.src = photo.src;
    tempImg.onload = () => {
      lightboxImg.src = photo.src;
      lightboxImg.alt = photo.titleSi;
      lightboxSpinner.classList.add('hidden');
      lightboxImg.style.opacity = '1';

      if (animateDirection) {
        requestAnimationFrame(() => {
          lightboxTrack.style.transition = 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.28s ease';
          lightboxTrack.style.transform = 'translateX(0)';
          lightboxTrack.style.opacity = '1';
        });
      }

      // Preload adjacent photos for instant next/prev swipe
      preloadAdjacent();
    };

    tempImg.onerror = () => {
      lightboxSpinner.classList.add('hidden');
      lightboxImg.alt = 'ඡායාරූපය ලෝඩ් කිරීමට නොහැකි විය';
      lightboxImg.style.opacity = '1';
    };
  }

  // Preload only next and previous image to save bandwidth on low connection
  function preloadAdjacent() {
    const nextIdx = (currentIndex + 1) % photos.length;
    const prevIdx = (currentIndex - 1 + photos.length) % photos.length;
    const preload1 = new Image();
    preload1.src = photos[nextIdx].src;
    const preload2 = new Image();
    preload2.src = photos[prevIdx].src;
  }

  function goToSlide(newIndex, direction) {
    resetZoom();
    currentIndex = (newIndex + photos.length) % photos.length;
    loadCurrentPhoto(direction);
    updateThumbnailSelection();
    if (isSlideshowActive) {
      resetSlideshowProgress();
    }
  }

  function nextSlide() {
    goToSlide(currentIndex + 1, 'next');
  }

  function prevSlide() {
    goToSlide(currentIndex - 1, 'prev');
  }

  function updateThumbnailSelection() {
    const thumbs = thumbnailStrip.querySelectorAll('.thumb-item');
    thumbs.forEach((t, i) => {
      if (i === currentIndex) {
        t.classList.add('active');
        // Auto scroll active thumbnail into view
        t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        t.classList.remove('active');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. Zoom & Pan Functionality
  // --------------------------------------------------------------------------
  function setZoom(level) {
    zoomLevel = Math.max(1, Math.min(level, 4));
    if (zoomLevel === 1) {
      currentTranslateX = 0;
      currentTranslateY = 0;
      lightboxImg.classList.remove('zoomed');
    } else {
      lightboxImg.classList.add('zoomed');
    }
    applyTransform();
    zoomPercent.textContent = `${Math.round(zoomLevel * 100)}%`;
  }

  function resetZoom() {
    setZoom(1);
  }

  function applyTransform() {
    lightboxImg.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) scale(${zoomLevel})`;
  }

  // Double click / Double tap to toggle zoom
  let lastTap = 0;
  lightboxStage.addEventListener('touchend', (e) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 300 && tapLength > 0) {
      e.preventDefault();
      toggleDoubleTapZoom();
    }
    lastTap = currentTime;
  });

  lightboxImg.addEventListener('dblclick', (e) => {
    e.preventDefault();
    toggleDoubleTapZoom();
  });

  function toggleDoubleTapZoom() {
    if (zoomLevel > 1) {
      resetZoom();
    } else {
      setZoom(2.2);
    }
  }

  // Mouse wheel zoom
  lightboxStage.addEventListener('wheel', (e) => {
    if (!isLightboxOpen) return;
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.25 : -0.25;
    setZoom(zoomLevel + delta);
  }, { passive: false });

  // Pan / Drag while zoomed
  lightboxImg.addEventListener('mousedown', (e) => {
    if (zoomLevel <= 1) return;
    e.preventDefault();
    isPanning = true;
    startPanX = e.clientX - currentTranslateX;
    startPanY = e.clientY - currentTranslateY;
    lightboxImg.classList.add('panning');
  });

  window.addEventListener('mousemove', (e) => {
    if (!isPanning || zoomLevel <= 1) return;
    e.preventDefault();
    currentTranslateX = e.clientX - startPanX;
    currentTranslateY = e.clientY - startPanY;
    applyTransform();
  });

  window.addEventListener('mouseup', () => {
    if (isPanning) {
      isPanning = false;
      lightboxImg.classList.remove('panning');
    }
  });

  // --------------------------------------------------------------------------
  // 5. Touch Gestures (Horizontal Swipe & Vertical Dismiss)
  // --------------------------------------------------------------------------
  lightboxStage.addEventListener('touchstart', (e) => {
    if (!isLightboxOpen) return;
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchCurrentX = touchStartX;
      touchCurrentY = touchStartY;
      isSwiping = true;

      if (zoomLevel > 1) {
        // Pan gesture when zoomed
        isPanning = true;
        startPanX = touchStartX - currentTranslateX;
        startPanY = touchStartY - currentTranslateY;
      }
    }
  }, { passive: true });

  lightboxStage.addEventListener('touchmove', (e) => {
    if (!isLightboxOpen || !isSwiping) return;

    if (e.touches.length === 1) {
      touchCurrentX = e.touches[0].clientX;
      touchCurrentY = e.touches[0].clientY;

      if (zoomLevel > 1 && isPanning) {
        currentTranslateX = touchCurrentX - startPanX;
        currentTranslateY = touchCurrentY - startPanY;
        applyTransform();
        return;
      }

      // If at 1x zoom, provide elastic drag preview horizontally
      const deltaX = touchCurrentX - touchStartX;
      const deltaY = touchCurrentY - touchStartY;

      // Prioritize horizontal swipe
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
        lightboxTrack.style.transform = `translateX(${deltaX * 0.4}px)`;
      }
    }
  }, { passive: true });

  lightboxStage.addEventListener('touchend', (e) => {
    if (!isLightboxOpen || !isSwiping) return;
    isSwiping = false;

    if (zoomLevel > 1) {
      isPanning = false;
      return;
    }

    const deltaX = touchCurrentX - touchStartX;
    const deltaY = touchCurrentY - touchStartY;

    lightboxTrack.style.transform = 'translateX(0)';

    // Horizontal Swipe Detection
    if (Math.abs(deltaX) > swipeThreshold && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        // Swiped Left -> Go to Next Photo
        nextSlide();
      } else {
        // Swiped Right -> Go to Previous Photo
        prevSlide();
      }
    } else if (deltaY > 100 && Math.abs(deltaY) > Math.abs(deltaX)) {
      // Swipe down significantly -> Close lightbox
      closeLightbox();
    }
  });

  // --------------------------------------------------------------------------
  // 6. Slideshow Feature
  // --------------------------------------------------------------------------
  function toggleSlideshow() {
    if (isSlideshowActive) {
      stopSlideshow();
    } else {
      startSlideshow();
    }
  }

  function startSlideshow() {
    if (!isLightboxOpen) {
      openLightbox(0);
    }
    isSlideshowActive = true;
    updateSlideshowUI(true);
    resetSlideshowProgress();
    showToast('▶ ස්වයංක්‍රීය ධාවනය සක්‍රීයයි (Slideshow Started)');
  }

  function stopSlideshow() {
    isSlideshowActive = false;
    if (slideshowTimer) clearTimeout(slideshowTimer);
    if (slideshowReqFrame) cancelAnimationFrame(slideshowReqFrame);
    slideshowProgress.style.width = '0%';
    updateSlideshowUI(false);
  }

  function updateSlideshowUI(active) {
    const playIcon = lightboxSlideshowBtn.querySelector('.play-icon');
    const pauseIcon = lightboxSlideshowBtn.querySelector('.pause-icon');
    if (active) {
      playIcon.classList.add('hidden');
      pauseIcon.classList.remove('hidden');
      lightboxSlideshowBtn.style.color = 'var(--accent-amber)';
    } else {
      playIcon.classList.remove('hidden');
      pauseIcon.classList.add('hidden');
      lightboxSlideshowBtn.style.color = '';
    }
  }

  function resetSlideshowProgress() {
    if (!isSlideshowActive) return;
    if (slideshowTimer) clearTimeout(slideshowTimer);
    if (slideshowReqFrame) cancelAnimationFrame(slideshowReqFrame);

    slideshowStartTimestamp = performance.now();
    slideshowProgress.style.width = '0%';

    function step(timestamp) {
      if (!isSlideshowActive) return;
      const elapsed = timestamp - slideshowStartTimestamp;
      const progress = Math.min((elapsed / slideshowIntervalMs) * 100, 100);
      slideshowProgress.style.width = `${progress}%`;

      if (elapsed < slideshowIntervalMs) {
        slideshowReqFrame = requestAnimationFrame(step);
      } else {
        nextSlide();
      }
    }

    slideshowReqFrame = requestAnimationFrame(step);
  }

  // --------------------------------------------------------------------------
  // 7. Fullscreen Toggle
  // --------------------------------------------------------------------------
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      lightbox.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  // --------------------------------------------------------------------------
  // 8. Event Listeners Setup
  // --------------------------------------------------------------------------
  function setupEventListeners() {
    // Navigation buttons
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prevSlide();
    });
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nextSlide();
    });

    // Close buttons
    closeLightboxBtn.addEventListener('click', closeLightbox);
    lightboxBackdrop.addEventListener('click', closeLightbox);

    // Zoom Buttons
    zoomInBtn.addEventListener('click', () => setZoom(zoomLevel + 0.3));
    zoomOutBtn.addEventListener('click', () => setZoom(zoomLevel - 0.3));
    zoomResetBtn.addEventListener('click', resetZoom);

    // Fullscreen and Slideshow
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    lightboxSlideshowBtn.addEventListener('click', toggleSlideshow);
    startSlideshowBtn.addEventListener('click', startSlideshow);

    // Data Saver Button
    dataSaverBtn.addEventListener('click', () => {
      enableDataSaver(!isDataSaver);
      showToast(isDataSaver ? '⚡ අඩු දත්ත ප්‍රකාරය සක්‍රීයයි (Data Saver On)' : '🚀 සාමාන්‍ය ප්‍රකාරය (Standard Mode)');
    });

    // View layout toggles (Grid / Masonry / Large)
    viewToggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        viewToggleBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const view = btn.dataset.view;
        galleryGrid.dataset.view = view;
      });
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (!isLightboxOpen) return;

      switch (e.key) {
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'ArrowRight':
          nextSlide();
          break;
        case 'Escape':
          closeLightbox();
          break;
        case ' ':
          e.preventDefault();
          toggleSlideshow();
          break;
        case '+':
        case '=':
          setZoom(zoomLevel + 0.3);
          break;
        case '-':
        case '_':
          setZoom(zoomLevel - 0.3);
          break;
        case '0':
          resetZoom();
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
      }
    });
  }

  // Toast Notification Helper
  let toastTimer = null;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Start initialization when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }
})();
