// Game Data
const gamesData = [
    {
        id: 1,
        title: "The Witcher 3: Wild Hunt",
        category: "RPG",
        platform: "PC",
        price: 450000,
        originalPrice: 899000,
        discount: 50,
        rating: 4.9,
        reviews: 12500,
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600",
        description: "Petualangan epik Geralt of Rivia dalam dunia fantasi yang penuh monster dan misteri."
    },
    {
        id: 2,
        title: "Cyberpunk 2077",
        category: "Action",
        platform: "PC",
        price: 699000,
        originalPrice: 999000,
        discount: 30,
        rating: 4.5,
        reviews: 8900,
        image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=600",
        description: "RPG aksi terbuka di Night City, metropolis yang terobsesi dengan kekuatan, glamor, dan modifikasi tubuh."
    },
    {
        id: 3,
        title: "Red Dead Redemption 2",
        category: "Adventure",
        platform: "Console",
        price: 599000,
        originalPrice: 899000,
        discount: 33,
        rating: 4.8,
        reviews: 15000,
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b2b0c?w=600",
        description: "Petualangan Arthur Morgan dan Van der Linde gang di Amerika tahun 1899."
    },
    {
        id: 4,
        title: "FIFA 24",
        category: "Sports",
        platform: "PC",
        price: 799000,
        originalPrice: 1099000,
        discount: 27,
        rating: 4.2,
        reviews: 5600,
        image: "https://images.unsplash.com/photo-1493711662062-fa541f7f0e71?w=600",
        description: "Pengalaman sepak bola paling otentik dengan pemain dan tim terbaru."
    },
    {
        id: 5,
        title: "Elden Ring",
        category: "RPG",
        platform: "PC",
        price: 799000,
        originalPrice: 999000,
        discount: 20,
        rating: 4.9,
        reviews: 11200,
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600",
        description: "Action RPG epik dalam dunia fantasi yang luas dan penuh misteri."
    },
    {
        id: 6,
        title: "Call of Duty: MW3",
        category: "Action",
        platform: "PC",
        price: 999000,
        originalPrice: 1299000,
        discount: 23,
        rating: 4.3,
        reviews: 7800,
        image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600",
        description: "Pengalaman FPS intens dengan campaign, multiplayer, dan mode zombie."
    },
    {
        id: 7,
        title: "Minecraft",
        category: "Simulation",
        platform: "PC",
        price: 299000,
        originalPrice: 399000,
        discount: 25,
        rating: 4.8,
        reviews: 25000,
        image: "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?w=600",
        description: "Bangun, jelajahi, dan bertahan hidup dalam dunia blok yang tak terbatas."
    },
    {
        id: 8,
        title: "Valorant",
        category: "Action",
        platform: "PC",
        price: 0,
        originalPrice: 0,
        discount: 0,
        rating: 4.6,
        reviews: 18000,
        image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600",
        description: "Tactical shooter 5v5 dengan agen unik dan kemampuan spesial."
    },
    {
        id: 9,
        title: "Genshin Impact",
        category: "Adventure",
        platform: "Mobile",
        price: 0,
        originalPrice: 0,
        discount: 0,
        rating: 4.4,
        reviews: 22000,
        image: "https://images.unsplash.com/photo-1612287230217-969e0c1297f9?w=600",
        description: "Open-world RPG dengan elemen gacha dan eksplorasi yang indah."
    },
    {
        id: 10,
        title: "GTA V",
        category: "Action",
        platform: "PC",
        price: 349000,
        originalPrice: 599000,
        discount: 42,
        rating: 4.7,
        reviews: 30000,
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600",
        description: "Kehidupan kriminal di Los Santos dengan tiga protagonis yang berbeda."
    },
    {
        id: 11,
        title: "God of War Ragnarök",
        category: "Action",
        platform: "Console",
        price: 1099000,
        originalPrice: 1299000,
        discount: 15,
        rating: 4.9,
        reviews: 9500,
        image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=600",
        description: "Petualangan Kratos dan Atreus dalam mitologi Norse yang epik."
    },
    {
        id: 12,
        title: "The Last of Us Part I",
        category: "Adventure",
        platform: "Console",
        price: 899000,
        originalPrice: 1099000,
        discount: 18,
        rating: 4.8,
        reviews: 8200,
        image: "https://images.unsplash.com/photo-1593305841991-05c29736cec7?w=600",
        description: "Kisah survival mendalam Joel dan Ellie dalam dunia pasca-apokaliptik."
    }
];

// Flash Sale Data
const flashSaleData = [
    {
        id: 101,
        title: "Steam Wallet Rp 100.000",
        category: "Voucher",
        platform: "PC",
        price: 95000,
        originalPrice: 100000,
        discount: 5,
        rating: 4.9,
        reviews: 5000,
        image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=600",
        featured: true
    },
    {
        id: 102,
        title: "PlayStation Plus 12 Bulan",
        category: "Subscription",
        platform: "Console",
        price: 599000,
        originalPrice: 899000,
        discount: 33,
        rating: 4.7,
        reviews: 3200,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600",
        featured: false
    },
    {
        id: 103,
        title: "Xbox Game Pass Ultimate",
        category: "Subscription",
        platform: "Console",
        price: 149000,
        originalPrice: 199000,
        discount: 25,
        rating: 4.8,
        reviews: 2800,
        image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=600",
        featured: false
    },
    {
        id: 104,
        title: "Mobile Legends Diamonds",
        category: "Voucher",
        platform: "Mobile",
        price: 14000,
        originalPrice: 20000,
        discount: 30,
        rating: 4.6,
        reviews: 15000,
        image: "https://images.unsplash.com/photo-1612287230217-969e0c1297f9?w=600",
        featured: false
    }
];

// State Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('user')) || null;
let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadGames();
    loadFlashSales();
    updateCartCount();
    startCountdown();
    initScrollAnimations();
    initMobileMenu();
});

// Load Games
function loadGames(filter = 'all') {
    const grid = document.getElementById('gamesGrid');
    let filteredGames = gamesData;

    if (filter !== 'all') {
        filteredGames = gamesData.filter(game => 
            game.platform.toLowerCase() === filter.toLowerCase()
        );
    }

    grid.innerHTML = filteredGames.map(game => createGameCard(game)).join('');
}

// Create Game Card HTML
function createGameCard(game) {
    const hasDiscount = game.discount > 0;
    const isFree = game.price === 0;
    
    return `
        <div class="game-card" data-id="${game.id}">
            <div class="game-image">
                <img src="${game.image}" alt="${game.title}" loading="lazy">
                ${hasDiscount ? `<span class="discount-badge">-${game.discount}%</span>` : ''}
                <span class="platform-badge">${game.platform}</span>
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-category">${game.category}</p>
                <div class="game-rating">
                    <i class="fas fa-star"></i>
                    <span>${game.rating} (${formatNumber(game.reviews)})</span>
                </div>
                <div class="game-price">
                    <div class="price">
                        ${hasDiscount ? `<span class="original-price">${formatPrice(game.originalPrice)}</span>` : ''}
                        <span class="current-price">${isFree ? 'GRATIS' : formatPrice(game.price)}</span>
                    </div>
                    ${!isFree ? `
                        <button class="add-to-cart" onclick="addToCart(${game.id})" title="Tambah ke Keranjang">
                            <i class="fas fa-cart-plus"></i>
                        </button>
                    ` : `
                        <button class="add-to-cart" onclick="downloadGame(${game.id})" title="Download">
                            <i class="fas fa-download"></i>
                        </button>
                    `}
                </div>
            </div>
        </div>
    `;
}

// Load Flash Sales
function loadFlashSales() {
    const grid = document.getElementById('dealsGrid');
    grid.innerHTML = flashSaleData.map(deal => createDealCard(deal)).join('');
}

// Create Deal Card HTML
function createDealCard(deal) {
    return `
        <div class="deal-card ${deal.featured ? 'featured' : ''}">
            <div class="game-image">
                <img src="${deal.image}" alt="${deal.title}" loading="lazy">
                <span class="discount-badge">-${deal.discount}%</span>
                <span class="platform-badge">${deal.platform}</span>
            </div>
            <div class="game-info">
                <h3 class="game-title">${deal.title}</h3>
                <p class="game-category">${deal.category}</p>
                <div class="game-price">
                    <div class="price">
                        <span class="original-price">${formatPrice(deal.originalPrice)}</span>
                        <span class="current-price">${formatPrice(deal.price)}</span>
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${deal.id}, true)">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Filter Games
function filterGames(platform) {
    currentFilter = platform;
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === platform || 
            (platform === 'all' && btn.textContent === 'Semua')) {
            btn.classList.add('active');
        }
    });
    
    loadGames(platform);
}

// Filter by Category
function filterByCategory(category) {
    const grid = document.getElementById('gamesGrid');
    const filteredGames = gamesData.filter(game => 
        game.category.toLowerCase() === category.toLowerCase()
    );
    
    grid.innerHTML = filteredGames.map(game => createGameCard(game)).join('');
    
    // Scroll to games section
    document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
}

// Add to Cart
function addToCart(gameId, isFlashSale = false) {
    const data = isFlashSale ? flashSaleData : gamesData;
    const game = data.find(g => g.id === gameId);
    
    if (!game) return;
    
    const existingItem = cart.find(item => item.id === gameId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: game.id,
            title: game.title,
            price: game.price,
            image: game.image,
            platform: game.platform,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showToast(`${game.title} ditambahkan ke keranjang`);
}

// Remove from Cart
function removeFromCart(gameId) {
    cart = cart.filter(item => item.id !== gameId);
    saveCart();
    updateCartCount();
    renderCartItems();
}

// Update Quantity
function updateQuantity(gameId, change) {
    const item = cart.find(item => item.id === gameId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(gameId);
        return;
    }
    
    saveCart();
    renderCartItems();
}

// Save Cart
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
}

// Toggle Cart Modal
function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active');
    
    if (modal.classList.contains('active')) {
        renderCartItems();
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Render Cart Items
function renderCartItems() {
    const container = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Keranjang belanja kosong</p>
            </div>
        `;
        updateCartTotal();
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.title}</h4>
                <p class="cart-item-price">${formatPrice(item.price)} x ${item.quantity}</p>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    updateCartTotal();
}

// Update Cart Total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = formatPrice(total);
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showToast('Keranjang belanja kosong!');
        return;
    }
    
    toggleCart();
    openCheckout();
}

// Open Checkout Modal
function openCheckout() {
    const modal = document.getElementById('checkoutModal');
    const itemsContainer = document.getElementById('checkoutItems');
    
    // Render checkout items
    itemsContainer.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.title} (${item.quantity}x)</span>
            <span>${formatPrice(item.price * item.quantity)}</span>
        </div>
    `).join('');
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('checkoutTotal').textContent = formatPrice(total);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Checkout Modal
function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Process Payment
function processPayment() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (total === 0) {
        showToast('Pesanan berhasil! Selamat bermain!');
        cart = [];
        saveCart();
        updateCartCount();
        closeCheckout();
        return;
    }
    
    // Show processing state
    showToast('Memproses pembayaran...');
    
    // Simulate Midtrans integration
    setTimeout(() => {
        // In real implementation, this would call Midtrans Snap API
        // For demo, we'll simulate successful payment
        simulateMidtransPayment(total, paymentMethod);
    }, 1500);
}

// Simulate Midtrans Payment
function simulateMidtransPayment(total, method) {
    // This would be replaced with actual Midtrans Snap integration
    // snap.pay(transactionToken, { ... })
    
    showToast(`Pembayaran ${getPaymentMethodName(method)} berhasil!`);
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartCount();
    closeCheckout();
    
    // Show success modal (in real app)
    setTimeout(() => {
        showToast('Key game telah dikirim ke email Anda!');
    }, 1000);
}

// Get Payment Method Name
function getPaymentMethodName(method) {
    const names = {
        'gopay': 'GoPay',
        'bank_transfer': 'Transfer Bank',
        'credit_card': 'Kartu Kredit',
        'dana': 'DANA'
    };
    return names[method] || method;
}

// Toggle Login Modal
function toggleLogin() {
    const modal = document.getElementById('loginModal');
    modal.classList.toggle('active');
    
    if (modal.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Handle Login
function handleLogin(event) {
    event.preventDefault();
    
    // Simulate login
    const email = event.target.querySelector('input[type="email"]').value;
    
    currentUser = {
        email: email,
        name: email.split('@')[0],
        avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=6366f1&color=fff`
    };
    
    localStorage.setItem('user', JSON.stringify(currentUser));
    
    toggleLogin();
    updateUserUI();
    showToast('Berhasil masuk! Selamat datang kembali.');
}

// Update User UI
function updateUserUI() {
    if (!currentUser) return;
    
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.innerHTML = `<img src="${currentUser.avatar}" alt="Profile" style="width: 32px; height: 32px; border-radius: 50%;">`;
    loginBtn.onclick = () => {
        if (confirm('Apakah Anda ingin keluar?')) {
            logout();
        }
    };
}

// Logout
function logout() {
    currentUser = null;
    localStorage.removeItem('user');
    
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.textContent = 'Masuk';
    loginBtn.onclick = toggleLogin;
    
    showToast('Berhasil keluar');
}

// Load More Games
function loadMoreGames() {
    showToast('Memuat lebih banyak game...');
    
    // Simulate loading more games
    setTimeout(() => {
        const grid = document.getElementById('gamesGrid');
        const moreGames = gamesData.slice(0, 4).map(game => ({
            ...game,
            id: game.id + 100
        }));
        
        moreGames.forEach(game => {
            const card = document.createElement('div');
            card.innerHTML = createGameCard(game);
            grid.appendChild(card.firstElementChild);
        });
    }, 1000);
}

// Download Game (for free games)
function downloadGame(gameId) {
    showToast('Mengarahkan ke halaman download...');
}

// Newsletter Subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input').value;
    
    showToast(`Terima kasih telah berlangganan! Email konfirmasi telah dikirim ke ${email}`);
    event.target.reset();
}

// Countdown Timer
function startCountdown() {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 12);
    
    function updateCountdown() {
        const now = new Date();
        const diff = endTime - now;
        
        if (diff <= 0) {
            endTime.setHours(endTime.getHours() + 24);
            return;
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const messageEl = document.getElementById('toastMessage');
    
    messageEl.textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// Format Price
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

// Format Number
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.game-card, .category-card, .feature-card, .deal-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// Mobile Menu
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Search Functionality
document.getElementById('searchInput')?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    
    if (query.length < 2) {
        loadGames(currentFilter);
        return;
    }
    
    const filtered = gamesData.filter(game => 
        game.title.toLowerCase().includes(query) ||
        game.category.toLowerCase().includes(query)
    );
    
    const grid = document.getElementById('gamesGrid');
    grid.innerHTML = filtered.map(game => createGameCard(game)).join('');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Initialize user UI on load
if (currentUser) {
    updateUserUI();
}

// Expose functions to global scope
window.toggleCart = toggleCart;
window.toggleLogin = toggleLogin;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.checkout = checkout;
window.closeCheckout = closeCheckout;
window.processPayment = processPayment;
window.filterGames = filterGames;
window.filterByCategory = filterByCategory;
window.loadMoreGames = loadMoreGames;
window.downloadGame = downloadGame;
window.handleLogin = handleLogin;
window.subscribeNewsletter = subscribeNewsletter;