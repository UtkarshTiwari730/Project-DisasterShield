# Campus Evacuation Card - Integration Guide

## Overview
I've created a comprehensive evacuation card system for educational institutions with unique features:

### Files Created:
1. **CampusEvacuation.jsx** - Full evacuation system page with detailed features
2. **EvacuationCard.jsx** - Standalone card component for the home page
3. **Home_updated.jsx** - Updated home page with the evacuation card included

## Features of the Evacuation System:

### 🏫 Smart Campus Evacuation System
- **AI-powered routing** - Dynamic evacuation routes based on real-time conditions
- **Real-time student tracking** - GPS tracking with automated roll-call verification
- **Intelligent alert system** - Multi-channel emergency notifications
- **Zone-based evacuation** - Segmented zones for different building areas
- **Live analytics** - Real-time monitoring of evacuation progress
- **Automated protocols** - Pre-programmed responses for different emergency types

### 🎓 Educational Institution Focus
- **Student tracking system** - Ensures all students are accounted for
- **Campus-specific assembly points** - Designated safe zones for different scenarios
- **Emergency contact protocols** - Specialized contacts for educational emergencies
- **Teacher/staff responsibilities** - Clear role definitions during evacuations

## How to Add the Card to Home Page:

### Option 1: Use the Standalone Card Component
```jsx
import EvacuationCard from "./component/EvacuationCard.jsx";

// Add this to your grid in Home.jsx:
<EvacuationCard setView={setView} />
```

### Option 2: Copy the Card Code Directly
Copy the card JSX from `EvacuationCard.jsx` and paste it directly into your Home.jsx grid.

### Option 3: Use the Updated Home Page
Replace your current `Home.jsx` with `Home_updated.jsx` which already includes the evacuation card.

## Integration Steps:

1. **Import the CampusEvacuation component** in App.jsx:
```jsx
import CampusEvacuation from "./component/CampusEvacuation.jsx";
```

2. **Add the route** in App.jsx renderView function:
```jsx
if (view === "campus-evacuation") return <CampusEvacuation setView={setView} />;
```

3. **Add navigation button** in App.jsx nav section:
```jsx
<button onClick={() => setView("campus-evacuation")}>
  Campus Evacuation
</button>
```

## Unique Features:
- **Smart evacuation routing** with AI optimization
- **Real-time student location tracking**
- **Automated emergency communication**
- **Zone-based evacuation protocols**
- **Live monitoring and analytics**
- **Educational institution specific protocols**

## Testing:
1. Start the development server: `npm run dev`
2. Navigate to the home page
3. Click on the "Campus Evacuation System" card
4. Verify the detailed evacuation page loads with all features

The system is now ready for integration and provides a comprehensive, unique evacuation solution specifically designed for educational institutions.
