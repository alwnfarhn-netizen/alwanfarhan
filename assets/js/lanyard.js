(function LanyardPhysics() {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const swingElement = document.getElementById('lanyard-swing');
    const container = document.getElementById('lanyard-container');
    if (!swingElement || !container) return;

    // Physics variables
    let currentAngle = 0;
    let targetAngle = 0;
    let velocity = 0;
    
    // Spring physics constants
    const stiffness = 0.05; // How strongly it pulls back to center
    const damping = 0.90;   // How quickly it slows down (friction)
    
    // Animation loop
    function updatePhysics() {
      // Calculate spring force towards target angle (usually 0)
      const force = (targetAngle - currentAngle) * stiffness;
      
      // Add force to velocity and apply damping
      velocity = (velocity + force) * damping;
      
      // Update current angle
      currentAngle += velocity;
      
      // Apply rotation
      swingElement.style.transform = `rotate(${currentAngle}deg)`;
      
      // Slowly return target angle to 0 if it was perturbed
      targetAngle *= 0.95;
      
      requestAnimationFrame(updatePhysics);
    }
    
    // Start loop
    updatePhysics();

    // Mouse interaction
    let lastMouseX = 0;
    
    document.addEventListener('mousemove', (e) => {
      // Calculate mouse velocity/direction
      const mouseX = e.clientX;
      const movementX = mouseX - lastMouseX;
      lastMouseX = mouseX;
      
      // Get bounding box of the card
      const rect = swingElement.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to card center
      const distX = mouseX - cardCenterX;
      const distY = e.clientY - cardCenterY;
      const distance = Math.sqrt(distX * distX + distY * distY);
      
      // If mouse is close to the card, apply force based on movement
      if (distance < 250) {
        // Push the card in the direction of mouse movement
        // We cap the movement effect to avoid crazy spinning
        const pushForce = Math.max(Math.min(movementX * 0.1, 10), -10);
        velocity += pushForce;
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
          velocity += Math.max(Math.min(movementX * 0.1, 10), -10);
        }
      }
    }, { passive: true });
    
    document.addEventListener('touchstart', (e) => {
      if(e.touches.length > 0) {
        lastTouchX = e.touches[0].clientX;
      }
    }, { passive: true });
    
    // Initial swing entrance animation
    setTimeout(() => {
      velocity = 15; // Start with a nice swing
    }, 500);
  });
})();
