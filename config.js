// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Nguyen Thi Ngoc Uyen",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Be My Valentine 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Bé thic anh hongg",                                    // First interaction
            yesBtn: "Cóoo ạaa",                                             // Text for "Yes" button
            noBtn: "Khồngggg",                                               // Text for "No" button
            secretAnswer: "Bé hong thic anh, bé iu anh coooơ ❤️"           // Secret hover message
        },
        second: {
            text: "Bé iu anh từng nào dọoo?",                          // For the love meter
            startText: "Từng nàyyyy!!!!",                                   // Text before the percentage
            nextBtn: "Típ ❤️"                                         // Text for the next button
        },
        third: {
            text: "Bé có mún xem pí mật ở trang típ theo hem 🌹", // The big question!
            yesBtn: "Cóoooo!",                                             // Text for "Yes" button
            noBtn: "Honggg xem âuuuu"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "UIIIII Bé iu anh từng đấy seoooo???!!! 🥰🚀💝",  // Shows when they go past 5000%
        high: "Úi chùi uiiii, nữa iiiii 🚀💝",              // Shows when they go past 1000%
        normal: "Nữa iiiii 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! Anh hạnh phúc qaaaaa 🎉💝💖Anh iu bé siu siu nhìuuu ạaa. Anh thấy mình siu may mắn khi được iu bé ó. Anh thic cảm giác được um bé chặt vào lòng anh, thic được chăm bé như công túa nữa ó 🤭, và còn thic được bé cưng nữaaa ><. Anh thấy hạnh phúc zô cùng khi có pé bên cạnh anh ọo, đôi lúc hơi nghịch linh tinh thui 👀 nhưng đối với anh em vẫn mãi là em pé xinh mí đáng iu ạaa😘.",
        message: "Chúc bé ngày Valentine ngọt ngào như chính em dọ 🥰💋❤️💕",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://drive.google.com/file/d/1XRSKVxhHRM5z3_z2ekq66VIzrk4fuOkg/view", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
