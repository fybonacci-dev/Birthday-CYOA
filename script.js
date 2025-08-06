// Game state management
let currentPage = 'splash-page';
let previousActivity = ''; // Track which morning activity was chosen
let previousAfternoon = ''; // Track which afternoon activity was chosen
let previousMorningTwo = ''; // Track which second morning activity was chosen

// Beach-specific state tracking
let beachMorningActivity = ''; // Track beach morning choice
let beachAfternoonActivity = ''; // Track beach afternoon choice
let beachMorningTwo = ''; // Track beach second morning choice

// Adventure journey tracking
let adventureJourney = {
    location: '',
    day1Morning: '',
    day1Afternoon: '',
    day2Morning: '',
    day2Afternoon: '',
    choices: []
};

// Choice descriptions for itinerary
const choiceDescriptions = {
    'beach': 'Beach Paradise at Grande Dunes',
    'mountains': 'Mountain Adventure at Chetolah Resort, Blowing Rock',
    'beach-run': 'Morning Beach Run along the shoreline',
    'resort-pool': 'Resort Pool & Hot Tub relaxation',
    'jet-ski': 'Jet Ski Adventure exploring hidden coves',
    'beach-golf': 'Oceanfront Golf championship course',
    'beach-spa': 'Resort Spa Massage with ocean views',
    'beach-lounging': 'Perfect Beach Day lounging and reading',
    'kayak-island': 'Kayak to Private Island exploration and snorkeling',
    'beach-show': 'Island Culture Show with live music and dancing',
    'pickleball': 'Pickleball Lessons with valley views',
    'paddleboard': 'Lake Paddleboarding and kayaking',
    'spa': 'Mountain Spa Retreat with hot stone massage',
    'pool': 'Poolside Afternoon with mountain vistas',
    'hike': 'Hike to Glen Marie Falls through wilderness',
    'golf': 'Championship Golf with mountain views',
    'brewery': 'Downtown Food & Brew Tour with local cuisine',
    'zipline': 'Canopy Zip Line Adventure through the treetops'
};

// Function to show a specific page
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the specified page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageId;
    }
}

// Function to start the adventure
function startAdventure() {
    showPage('choice-1');
}

// Function to handle choice selection
function makeChoice(choice) {
    // Track the choice in our journey
    adventureJourney.choices.push(choice);
    
    switch(choice) {
        case 'beach':
            adventureJourney.location = 'beach';
            showPage('beach-page');
            break;
        case 'mountains':
            adventureJourney.location = 'mountains';
            showPage('mountains-page');
            break;
        
        // Beach adventure choices
        case 'beach-run':
            beachMorningActivity = 'beach-run';
            adventureJourney.day1Morning = choice;
            showPage('beach-run-page');
            break;
        case 'resort-pool':
            beachMorningActivity = 'resort-pool';
            adventureJourney.day1Morning = choice;
            showPage('resort-pool-page');
            break;
        case 'jet-ski':
            beachAfternoonActivity = 'jet-ski';
            adventureJourney.day1Afternoon = choice;
            showPage('jet-ski-page');
            break;
        case 'beach-golf':
            beachAfternoonActivity = 'beach-golf';
            adventureJourney.day1Afternoon = choice;
            showPage('beach-golf-page');
            break;
        case 'beach-spa':
            beachMorningTwo = 'beach-spa';
            adventureJourney.day2Morning = choice;
            showPage('beach-spa-page');
            break;
        case 'beach-lounging':
            beachMorningTwo = 'beach-lounging';
            adventureJourney.day2Morning = choice;
            showPage('beach-lounging-page');
            break;
        case 'kayak-island':
            adventureJourney.day2Afternoon = choice;
            showPage('kayak-island-page');
            break;
        case 'beach-show':
            adventureJourney.day2Afternoon = choice;
            showPage('beach-show-page');
            break;
            
        // Mountain adventure choices
        case 'pickleball':
            previousActivity = 'pickleball';
            adventureJourney.day1Morning = choice;
            showPage('pickleball-page');
            break;
        case 'paddleboard':
            previousActivity = 'paddleboard';
            adventureJourney.day1Morning = choice;
            showPage('paddleboard-page');
            break;
        case 'spa':
            previousAfternoon = 'spa';
            adventureJourney.day1Afternoon = choice;
            showPage('spa-page');
            break;
        case 'pool':
            previousAfternoon = 'pool';
            adventureJourney.day1Afternoon = choice;
            showPage('pool-page');
            break;
        case 'hike':
            previousMorningTwo = 'hike';
            adventureJourney.day2Morning = choice;
            showPage('hike-page');
            break;
        case 'golf':
            previousMorningTwo = 'golf';
            adventureJourney.day2Morning = choice;
            showPage('golf-page');
            break;
        case 'brewery':
            adventureJourney.day2Afternoon = choice;
            showPage('brewery-page');
            break;
        case 'zipline':
            adventureJourney.day2Afternoon = choice;
            showPage('zipline-page');
            break;
        default:
            console.log('Unknown choice:', choice);
    }
}

// Function to go back to the previous choice
function goBack() {
    showPage('choice-1');
}

// Function to go back to mountains choice
function goToMountains() {
    showPage('mountains-page');
}

// Function to go back to the morning activity choice
function goBackToActivity() {
    if (previousActivity === 'pickleball') {
        showPage('pickleball-page');
    } else if (previousActivity === 'paddleboard') {
        showPage('paddleboard-page');
    } else {
        showPage('mountains-page'); // fallback
    }
}

// Function to go back to the afternoon choice
function goBackToAfternoon() {
    if (previousAfternoon === 'spa') {
        showPage('spa-page');
    } else if (previousAfternoon === 'pool') {
        showPage('pool-page');
    } else {
        showPage('mountains-page'); // fallback
    }
}

// Function to go back to the second morning choice
function goBackToMorningTwo() {
    if (previousMorningTwo === 'hike') {
        showPage('hike-page');
    } else if (previousMorningTwo === 'golf') {
        showPage('golf-page');
    } else {
        showPage('mountains-page'); // fallback
    }
}

// Beach navigation functions
function goBackToBeachMorningTwo() {
    if (beachMorningTwo === 'beach-spa') {
        showPage('beach-spa-page');
    } else if (beachMorningTwo === 'beach-lounging') {
        showPage('beach-lounging-page');
    } else {
        showPage('beach-page'); // fallback
    }
}

// Add some birthday celebration effects
function addBirthdayEffects() {
    // Create floating birthday elements
    const emojis = ['🎉', '🎂', '🎈', '🎁', '✨', '🌟'];
    
    setInterval(() => {
        if (currentPage === 'splash-page') {
            createFloatingEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
        }
    }, 2000);
}

function createFloatingEmoji(emoji) {
    const floatingEmoji = document.createElement('div');
    floatingEmoji.textContent = emoji;
    floatingEmoji.style.position = 'fixed';
    floatingEmoji.style.left = Math.random() * window.innerWidth + 'px';
    floatingEmoji.style.top = window.innerHeight + 'px';
    floatingEmoji.style.fontSize = '2em';
    floatingEmoji.style.pointerEvents = 'none';
    floatingEmoji.style.zIndex = '1000';
    floatingEmoji.style.animation = 'floatUp 4s linear';
    
    document.body.appendChild(floatingEmoji);
    
    // Remove the emoji after animation completes
    setTimeout(() => {
        if (floatingEmoji.parentNode) {
            floatingEmoji.parentNode.removeChild(floatingEmoji);
        }
    }, 4000);
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        from {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        to {
            transform: translateY(-${window.innerHeight + 100}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Start with the splash page
    showPage('splash-page');
    
    // Add birthday effects
    addBirthdayEffects();
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && currentPage === 'splash-page') {
            startAdventure();
        } else if (event.key === 'Escape') {
            if (currentPage === 'beach-page' || currentPage === 'mountains-page') {
                goBack();
            } else if (currentPage === 'choice-1') {
                showPage('splash-page');
            }
        }
    });
});

// Add a fun birthday message to the console
console.log('🎉 Happy 40th Birthday, Greg! 🎉');
console.log('Welcome to your adventure game!');
console.log('Pro tip: You can use Enter to start and Escape to go back!');

// Function to download adventure itinerary
function downloadItinerary() {
    const itinerary = generateItinerary();
    const blob = new Blob([itinerary], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Greg-40th-Birthday-Adventure-Itinerary.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Function to generate the itinerary content
function generateItinerary() {
    const currentDate = new Date().toLocaleDateString();
    const locationName = adventureJourney.location === 'beach' ? 'Grande Dunes Beach Resort' : 'Chetolah Mountain Resort, Blowing Rock';
    
    let itinerary = `
🎉 GREG'S 40th BIRTHDAY ADVENTURE ITINERARY 🎉
Generated on: ${currentDate}

═══════════════════════════════════════════════════════════

🌟 DESTINATION: ${locationName}

Four decades of learning, growing, conquering, and building,
Your journey's been rich, fearless, and wildly fulfilling.
You've built something irreplaceable, a business with soul,
Led with your heart while achieving each goal.

═══════════════════════════════════════════════════════════

📅 DAY 1 - ARRIVAL & ADVENTURE

🌅 MORNING ACTIVITY:
${choiceDescriptions[adventureJourney.day1Morning] || 'Not selected'}

🌆 AFTERNOON ADVENTURE:
${choiceDescriptions[adventureJourney.day1Afternoon] || 'Not selected'}

═══════════════════════════════════════════════════════════

📅 DAY 2 - EXPLORATION & CELEBRATION

🌅 MORNING EXPLORATION:
${choiceDescriptions[adventureJourney.day2Morning] || 'Not selected'}

🌆 AFTERNOON FINALE:
${choiceDescriptions[adventureJourney.day2Afternoon] || 'Not selected'}

═══════════════════════════════════════════════════════════

🎊 YOUR ADVENTURE SUMMARY:

Your personalized birthday adventure included:
`;

    // Add each choice with description
    adventureJourney.choices.forEach((choice, index) => {
        if (choiceDescriptions[choice]) {
            itinerary += `${index + 1}. ${choiceDescriptions[choice]}\n`;
        }
    });

    itinerary += `
═══════════════════════════════════════════════════════════

💝 BIRTHDAY REFLECTION:

Now comes a moment to breathe, to rest—
Before tackling what's next (and giving your best).
You've earned a break, a rejuvenating quest,
To reset your soul and feel truly blessed.

At 40, you're not just older - you're more refined, more 
appreciative, and ready for whatever adventures the next 
decade brings!

Happy 40th Birthday, Greg! 🎉

May your adventures continue to be bold, meaningful, and 
filled with the joy that comes from living life to the fullest!

═══════════════════════════════════════════════════════════

Generated by: Greg's Epic 40th Birthday Adventure Game by Fybonacci AI
Created with ❤️ for an amazing milestone birthday!
`;

    return itinerary;
}
