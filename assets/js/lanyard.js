(function LanyardPhysics() {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const swingElement = document.getElementById('lanyard-swing');
    const container = document.getElementById('lanyard-container');
    if (!swingElement || !container) return;

    // Physics variables
    let currentAngleX = 0; // Swing left/right (Rotation Z)
    let currentAngleY = 0; // Twist (Rotation Y)
    let velocityX = 0;
    let velocityY = 0;
    
    // Spring physics constants
    const stiffness = 0.03; // Lower = looser swing
    const damping = 0.94;   // Higher = longer swing duration
    
    // Mouse tracking for parallax
    let targetX = 0;
    let targetY = 0;

    // Animation loop
    function updatePhysics() {
      // Calculate spring force towards target (which usually decays to 0)
      const forceX = (targetX - currentAngleX) * stiffness;
      const forceY = (targetY - currentAngleY) * (stiffness * 1.5);
      
      // Apply force to velocity and apply friction (damping)
      velocityX = (velocityX + forceX) * damping;
      velocityY = (velocityY + forceY) * damping;
      
      // Update angles
      currentAngleX += velocityX;
      currentAngleY += velocityY;
      
      // Apply 3D rotation: 
      // Z rotates it like a pendulum.
      // Y twists it slightly for 3D effect.
      // X adds a slight tilt forwards/backwards based on speed.
      const tiltX = Math.abs(velocityX) * 0.5;
      
      swingElement.style.transform = `rotateZ(${currentAngleX}deg) rotateY(${currentAngleY}deg) rotateX(${tiltX}deg)`;
      
      // Slowly return targets to 0 to settle down
      targetX *= 0.90;
      targetY *= 0.90;
      
      requestAnimationFrame(updatePhysics);
    }
    
    // Start loop
    updatePhysics();

    // Mouse interaction
    let lastMouseX = window.innerWidth / 2;
    
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const movementX = mouseX - lastMouseX;
      lastMouseX = mouseX;
      
      // Get bounding box of the card
      const rect = swingElement.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      
      const distX = mouseX - cardCenterX;
      const distY = e.clientY - cardCenterY;
      const distance = Math.sqrt(distX * distX + distY * distY);
      
      // Parallax effect if near the card (adds to target)
      if (distance < 300) {
        // Slight twist based on mouse position relative to center
        targetY = (distX / 300) * 15; // Max 15 deg twist
        
        // Push force if moved quickly
        const pushForceX = movementX * 0.15;
        // Cap the push force
        velocityX += Math.max(Math.min(pushForceX, 15), -15);
      } else {
        targetY = 0; // Settle back
      }
    });

    // Touch interaction for mobile
    let lastTouchX = 0;
    document.addEventListener('touchmove', (e) => {
      if(e.touches.length > 0) {
        const touchX = e.touches[0].clientX;
        const movementX = touchX - lastTouchX;
        lastTouchX = touchX;
        
        const rect = swingElement.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        const distX = touchX - cardCenterX;
        const distY = e.touches[0].clientY - cardCenterY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        if (distance < 200) {
          targetY = (distX / 200) * 15;
          velocityX += Math.max(Math.min(movementX * 0.15, 15), -15);
        } else {
          targetY = 0;
        }
      }
    }, { passive: true });
    
    document.addEventListener('touchstart', (e) => {
      if(e.touches.length > 0) {
        lastTouchX = e.touches[0].clientX;
      }
    }, { passive: true });
    
    // Initial entrance swing
    setTimeout(() => {
      velocityX = 15; // Give it a good initial push
      velocityY = 10;
    }, 300);
  });
})();
