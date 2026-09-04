/**
 * DALCHINI CHAMPARAN RESTAURANT
 * Client Presentation & Demo Interactive Script
 * Clean, Vanilla JavaScript without Framework Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. DATA STRUCTURES (Easily replaceable by the client/developer)
  // --------------------------------------------------------------------------

  // Menu Items Dataset
  const MENU_ITEMS = [
    // Champaran Mutton & Special Handi
    {
      id: 'm1',
      category: 'mutton',
      name: 'Champaran Ahuna Mutton (1 Handi)',
      description: 'The royal signature dish. Tender goat meat slow-cooked with whole garlic bulbs and mustard oil sealed in an earthen clay pot over charcoal embers.',
      price: '₹720',
      portion: '500g Handi (Serves 2)',
      isVeg: false,
      image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=400&q=80',
      badge: 'Signature'
    },
    {
      id: 'm2',
      category: 'mutton',
      name: 'Champaran Handi Mutton (Full Pot)',
      description: 'Slow-dum clay pot mutton cooked in cold-pressed mustard oil with shallots and 16 roasted whole spices.',
      price: '₹1,380',
      portion: '1kg Handi (Serves 4)',
      isVeg: false,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80',
      badge: 'Popular'
    },
    {
      id: 'm3',
      category: 'mutton',
      name: 'Classic Mutton Curry',
      description: 'Home-style spiced tender bone-in mutton simmered gently in traditional Bihari coriander-garlic gravy.',
      price: '₹440',
      portion: 'Half / 4 Pcs',
      isVeg: false,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'm4',
      category: 'mutton',
      name: 'Mutton Bhuna Gosht',
      description: 'Succulent mutton cubes roasted on a slow flame with caramelized onions, green cardamoms, and black pepper.',
      price: '₹480',
      portion: 'Serves 2',
      isVeg: false,
      image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=400&q=80'
    },

    // Chicken Special
    {
      id: 'c1',
      category: 'chicken',
      name: 'Champaran Handi Chicken',
      description: 'Farm-fresh chicken sealed in an earthen handi with crushed garlic, whole cloves, and mustard oil dum.',
      price: '₹520',
      portion: '500g Handi (Serves 2)',
      isVeg: false,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80',
      badge: 'House Special'
    },
    {
      id: 'c2',
      category: 'chicken',
      name: 'Chicken Dehati Curry',
      description: 'Village style rural spiced chicken curry with rustic whole spices and rustic mustard oil tempering.',
      price: '₹360',
      portion: 'Serves 2',
      isVeg: false,
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'c3',
      category: 'chicken',
      name: 'Old Delhi Butter Chicken',
      description: 'Char-grilled tandoori chicken shredded and tossed in velvety tomato, butter, and cashew cream gravy.',
      price: '₹420',
      portion: 'Serves 2',
      isVeg: false,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'c4',
      category: 'chicken',
      name: 'Murgh Kalimirch Handi',
      description: 'Boneless chicken prepared with cracked Tellicherry black pepper and rich yogurt gravy.',
      price: '₹390',
      portion: 'Serves 2',
      isVeg: false,
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=400&q=80'
    },

    // Starters
    {
      id: 's1',
      category: 'starters',
      name: 'Tandoori Murgh (Full/Half)',
      description: 'Whole spring chicken marinated overnight in Kashmiri red chili, mustard oil, and char-grilled in clay tandoor.',
      price: '₹340 / ₹580',
      portion: 'Half / Full',
      isVeg: false,
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=400&q=80',
      badge: 'Tandoor'
    },
    {
      id: 's2',
      category: 'starters',
      name: 'Mutton Seekh Kebab',
      description: 'Spiced minced lamb skewers grilled over glowing coals, served with mint chutney and pickled lachha onion.',
      price: '₹440',
      portion: '6 Pcs',
      isVeg: false,
      image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 's3',
      category: 'starters',
      name: 'Paneer Tikka Angara',
      description: 'Fresh malai cottage cheese cubes infused with ajwain, curd, and tandoori masala with charred bell peppers.',
      price: '₹320',
      portion: '6 Large Pcs',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 's4',
      category: 'starters',
      name: 'Chicken Malai Tikka',
      description: 'Melt-in-mouth chicken chunks steeped in fresh cream, processed cheese, white pepper, and green cardamom.',
      price: '₹380',
      portion: '6 Pcs',
      isVeg: false,
      image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80'
    },

    // Vegetarian
    {
      id: 'v1',
      category: 'vegetarian',
      name: 'Champaran Handi Paneer',
      description: 'Clay pot sealed cottage cheese braised with whole roasted spices, capsicum, and earthen dum aroma.',
      price: '₹360',
      portion: 'Serves 2',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=80',
      badge: 'Chef Favorite'
    },
    {
      id: 'v2',
      category: 'vegetarian',
      name: 'Dalchini Special Dal Makhani',
      description: 'Black lentils slow-cooked overnight for 18 hours with churned butter and dairy cream.',
      price: '₹280',
      portion: 'Serves 2',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'v3',
      category: 'vegetarian',
      name: 'Mushroom Do Pyaza',
      description: 'Button mushrooms sautéed with double diced onions, crushed cumin, and tangy tomato gravy.',
      price: '₹320',
      portion: 'Serves 2',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=80'
    },

    // Rice & Biryani
    {
      id: 'r1',
      category: 'rice',
      name: 'Champaran Mutton Dum Biryani',
      description: 'Aged basmati rice and handi mutton layers sealed with wheat dough and steamed over slow charcoal fire.',
      price: '₹460',
      portion: 'Serves 1-2 (With Raita)',
      isVeg: false,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80',
      badge: 'Dum Biryani'
    },
    {
      id: 'r2',
      category: 'rice',
      name: 'Hyderabadi Chicken Biryani',
      description: 'Fragrant saffron rice cooked with spiced chicken, fried brown onions, and mint leaves.',
      price: '₹360',
      portion: 'Serves 1-2 (With Mirchi Ka Salan)',
      isVeg: false,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'r3',
      category: 'rice',
      name: 'Jeera Basmati Rice',
      description: 'Steamed premium extra-long grain basmati rice tempered with royal cumin seeds and pure desi ghee.',
      price: '₹160',
      portion: 'Serves 2',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80'
    },

    // Roti & Naan
    {
      id: 'b1',
      category: 'roti',
      name: 'Butter Garlic Naan',
      description: 'Refined flour leavened flatbread layered with roasted minced garlic and brushed with amul butter.',
      price: '₹75',
      portion: '1 Pc',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'b2',
      category: 'roti',
      name: 'Traditional Rumali Roti',
      description: 'Handkerchief-thin delicate soft flatbread tossed and baked over an inverted wok (ulta tawa).',
      price: '₹45',
      portion: '1 Pc',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'b3',
      category: 'roti',
      name: 'Tandoori Roti (Butter / Plain)',
      description: 'Whole wheat flatbread baked fresh inside charcoal clay tandoor.',
      price: '₹25 / ₹35',
      portion: '1 Pc',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80'
    },

    // Chinese
    {
      id: 'ch1',
      category: 'chinese',
      name: 'Chilli Chicken Dry / Gravy',
      description: 'Crispy diced chicken tossed with capsicum, green chillies, spring onions, and oriental dark soy glaze.',
      price: '₹340',
      portion: 'Serves 2',
      isVeg: false,
      image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'ch2',
      category: 'chinese',
      name: 'Veg Hakka Noodles',
      description: 'Wok-tossed noodles with shredded cabbage, carrots, French beans, and garlic-soya seasonings.',
      price: '₹210',
      portion: 'Serves 2',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=400&q=80'
    },

    // Beverages
    {
      id: 'bv1',
      category: 'beverages',
      name: 'Dalchini Special Kulhad Chai',
      description: 'Rich boiling milk infused with cracked cinnamon bark, green cardamoms, and ginger served in baked clay kulhad.',
      price: '₹50',
      portion: '1 Kulhad',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'bv2',
      category: 'beverages',
      name: 'Kesar Pista Matka Lassi',
      description: 'Thick hand-churned sweet yogurt crowned with saffron strands, crushed pistachios, and malai.',
      price: '₹110',
      portion: '300ml Earthen Cup',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80'
    },

    // Desserts
    {
      id: 'd1',
      category: 'desserts',
      name: 'Shahi Gulab Jamun with Rabri',
      description: 'Warm fried khoya dumplings soaked in rose syrup served alongside chilled saffron reduced milk rabri.',
      price: '₹140',
      portion: '2 Pcs with Rabri',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1605197150444-9988899fa0e9?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'd2',
      category: 'desserts',
      name: 'Authentic Matka Malai Kulfi',
      description: 'Dense traditional Indian ice cream flavored with green cardamom and almonds set in small clay pots.',
      price: '₹90',
      portion: '1 Matka',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1605197150444-9988899fa0e9?auto=format&fit=crop&w=400&q=80'
    }
  ];

  // Gallery Dataset
  const GALLERY_ITEMS = [
    {
      url: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80',
      title: 'Sealed Earthen Clay Handi',
      category: 'Traditional Cooking',
      subcaption: 'Authentic charcoal dum technique with sealed clay lid preserving natural juices.'
    },
    {
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      title: 'Warm Ambient Dining Hall',
      category: 'Restaurant Interior',
      subcaption: 'Comfortable family booths and intimate warm lighting for luxury dining.'
    },
    {
      url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
      title: 'Champaran Handi Mutton Simmering',
      category: 'Signature Dish',
      subcaption: 'Tender goat meat slow-simmered in whole garlic pods and cold-pressed mustard oil.'
    },
    {
      url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=80',
      title: 'Charcoal Tandoori Grill',
      category: 'Kitchen Live Grill',
      subcaption: 'Freshly skewered kebabs and tandoori chicken cooked over glowing clay coals.'
    },
    {
      url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
      title: 'Cozy Family Seating',
      category: 'Dining Experience',
      subcaption: 'Spacious seating arrangements designed for relaxed family dinners and celebrations.'
    },
    {
      url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
      title: 'Dalchini Special Dum Biryani',
      category: 'Signature Food',
      subcaption: 'Layered royal basmati rice cooked with whole spices, saffron, and fresh herbs.'
    },
    {
      url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80',
      title: 'Master Chefs at Work',
      category: 'Hygienic Kitchen',
      subcaption: 'Uncompromising hygiene, stainless steel prep counters, and pure ingredients.'
    },
    {
      url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
      title: 'Fresh Tandoori Breads & Naan',
      category: 'Tandoor Specials',
      subcaption: 'Piping hot garlic butter naan baked to crisp golden perfection.'
    }
  ];

  // --------------------------------------------------------------------------
  // 2. NAVBAR SCROLL EFFECT & MOBILE MENU TOGGLE
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileDrawerClose && mobileDrawer) {
    mobileDrawerClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer) {
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // --------------------------------------------------------------------------
  // 3. MENU CATEGORY FILTERING
  // --------------------------------------------------------------------------
  const menuContainer = document.getElementById('menuItemsContainer');
  const categoryButtons = document.querySelectorAll('.menu-tab-btn');

  function renderMenuItems(category = 'all') {
    if (!menuContainer) return;

    const filtered = category === 'all' 
      ? MENU_ITEMS 
      : MENU_ITEMS.filter(item => item.category === category);

    menuContainer.innerHTML = '';

    if (filtered.length === 0) {
      menuContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
          <p>No dishes found under this category. Please check other sections.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-list-card fade-in-element in-view';
      card.id = `item-${item.id}`;

      const dietClass = item.isVeg ? 'veg' : 'nonveg';
      const dietTitle = item.isVeg ? 'Vegetarian' : 'Non-Vegetarian';

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="menu-item-thumb" loading="lazy" />
        <div class="menu-item-details">
          <div class="menu-item-top">
            <div class="menu-item-title-row">
              <span class="diet-indicator ${dietClass}" title="${dietTitle}"></span>
              <h4 class="menu-item-name">${item.name}</h4>
            </div>
            <span class="menu-item-price">${item.price}</span>
          </div>
          <p class="menu-item-desc">${item.description}</p>
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <span class="menu-item-portion">${item.portion}</span>
            <span style="font-size: 0.72rem; color: var(--text-faint); font-weight: 500;">[Demo Item]</span>
          </div>
        </div>
      `;

      menuContainer.appendChild(card);
    });
  }

  // Initial render of all menu items
  renderMenuItems('all');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const targetCategory = button.getAttribute('data-category');
      renderMenuItems(targetCategory);
    });
  });

  // --------------------------------------------------------------------------
  // 4. GALLERY LIGHTBOX MODAL
  // --------------------------------------------------------------------------
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxSubcaption = document.getElementById('lightboxSubcaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const galleryItems = document.querySelectorAll('.gallery-item');

  let currentGalleryIndex = 0;

  function showLightbox(index) {
    if (!lightboxModal || !GALLERY_ITEMS[index]) return;
    currentGalleryIndex = index;
    const item = GALLERY_ITEMS[index];
    lightboxImg.src = item.url;
    lightboxImg.alt = item.title;
    lightboxCaption.textContent = item.title;
    lightboxSubcaption.textContent = `${item.category} • ${item.subcaption}`;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hideLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function nextLightbox() {
    currentGalleryIndex = (currentGalleryIndex + 1) % GALLERY_ITEMS.length;
    showLightbox(currentGalleryIndex);
  }

  function prevLightbox() {
    currentGalleryIndex = (currentGalleryIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    showLightbox(currentGalleryIndex);
  }

  galleryItems.forEach(elem => {
    elem.addEventListener('click', () => {
      const idx = parseInt(elem.getAttribute('data-index') || '0', 10);
      showLightbox(idx);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', hideLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) hideLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') hideLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
  });

  // --------------------------------------------------------------------------
  // 5. RESERVATION DEMO FORM INTERACTION & TOAST
  // --------------------------------------------------------------------------
  const reservationForm = document.getElementById('reservationForm');
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(msg, duration = 4000) {
    if (!toastNotice || !toastMessage) return;
    toastMessage.textContent = msg;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, duration);
  }

  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('resName');
      const phoneInput = document.getElementById('resPhone');
      const dateInput = document.getElementById('resDate');
      const guestsInput = document.getElementById('resGuests');

      const clientName = nameInput ? nameInput.value.trim() : 'Guest';
      const guests = guestsInput ? guestsInput.value : '2';

      showToast(`Reservation request received for ${clientName} (${guests} Guests)! Demo mode: In live production, this will connect directly to restaurant WhatsApp/SMS.`, 5000);
      reservationForm.reset();
    });
  }

  // --------------------------------------------------------------------------
  // 6. CLIENT CUSTOMIZATION CHECKLIST (Interactive Demo Feature)
  // --------------------------------------------------------------------------
  const checklistItems = document.querySelectorAll('.checklist-item');
  const progressBar = document.getElementById('checklistProgressFill');
  const progressText = document.getElementById('checklistProgressText');

  function updateChecklistProgress() {
    if (!checklistItems.length) return;
    let checkedCount = 0;
    checklistItems.forEach(item => {
      if (item.classList.contains('checked')) {
        checkedCount++;
      }
    });

    const percent = Math.round((checkedCount / checklistItems.length) * 100);
    if (progressBar) progressBar.style.width = `${percent}%`;
    if (progressText) progressText.textContent = `${checkedCount} of ${checklistItems.length} items ready (${percent}%)`;
  }

  checklistItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
      updateChecklistProgress();
    });
  });

  // Initial update
  updateChecklistProgress();

  // --------------------------------------------------------------------------
  // 7. BACK TO TOP BUTTON & SCROLL ANIMATIONS
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      if (backToTopBtn) backToTopBtn.classList.add('visible');
    } else {
      if (backToTopBtn) backToTopBtn.classList.remove('visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Intersection Observer for subtle scroll entrance animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-element').forEach(el => {
    observer.observe(el);
  });
});
