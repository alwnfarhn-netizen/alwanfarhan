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
    const stiffness = 0.05; // Force pulling back to center
    const damping = 0.92;   // Friction

    // Drag state
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let initialAngleX = 0;
    let initialAngleY = 0;
    let previousMouseX = 0;
    let flickVelocityX = 0;

    // Set grab cursor
    swingElement.style.cursor = 'grab';

    // Animation loop
    function updatePhysics() {
      if (!isDragging) {
        // Calculate spring force towards 0 (rest position)
        const forceX = (0 - currentAngleX) * stiffness;
        const forceY = (0 - currentAngleY) * (stiffness * 1.5);
        
        // Apply force to velocity and apply friction
        velocityX = (velocityX + forceX) * damping;
        velocityY = (velocityY + forceY) * damping;
        
        // Update angles
        currentAngleX += velocityX;
        currentAngleY += velocityY;
      }
      
      // Calculate 3D tilt based on velocity to make it feel physical
      const tiltX = isDragging ? 0 : Math.abs(velocityX) * 0.3;
      
      // Apply 3D rotation
      swingElement.style.transform = `rotateZ(${currentAngleX}deg) rotateY(${currentAngleY}deg) rotateX(${tiltX}deg)`;
      
      requestAnimationFrame(updatePhysics);
    }
    
    // Start loop
    updatePhysics();

    // Mouse DOWN - Start dragging
    swingElement.addEventListener('mousedown', (e) => {
      isDragging = true;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      previousMouseX = e.clientX;
      initialAngleX = currentAngleX;
      initialAngleY = currentAngleY;
      
      swingElement.style.cursor = 'grabbing';
      
      // Stop current velocity
      velocityX = 0;
      velocityY = 0;
    });

    // Mouse UP - Stop dragging
    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        swingElement.style.cursor = 'grab';
        
        // Transfer flick momentum to velocity
        velocityX = flickVelocityX;
      }
    });

    // Mouse interaction (Hover Parallax & Dragging)
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const movementX = mouseX - previousMouseX;
      previousMouseX = mouseX;
      
      if (isDragging) {
        // Calculate how far mouse moved from start of drag
        const deltaX = mouseX - dragStartX;
        
        // Map pixel distance to rotation angle (adjust multiplier for sensitivity)
        currentAngleX = initialAngleX + (deltaX * 0.15);
        currentAngleY = initialAngleY + (deltaX * 0.05); // slight twist when pulled
        
        // Track flick velocity
        flickVelocityX = movementX * 0.5;
      } else {
        // Subtle Hover Parallax (less aggressive than before)
        const rect = swingElement.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        const distX = mouseX - cardCenterX;
        const distY = e.clientY - cardCenterY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        if (distance < 250) {
          // Push force if moved quickly, but very gentle
          const pushForceX = movementX * 0.05;
          velocityX += Math.max(Math.min(pushForceX, 5), -5);
        }
      }
    });

    // Touch interaction for mobile
    swingElement.addEventListener('touchstart', (e) => {
      if(e.touches.length > 0) {
        isDragging = true;
        dragStartX = e.touches[0].clientX;
        previousMouseX = dragStartX;
        initialAngleX = currentAngleX;
        initialAngleY = currentAngleY;
        velocityX = 0;
        velocityY = 0;
      }
    }, { passive: true });

    document.addEventListener('touchend', () => {
      if (isDragging) {
        isDragging = false;
        velocityX = flickVelocityX;
      }
    });

    document.addEventListener('touchmove', (e) => {
      if(e.touches.length > 0) {
        const touchX = e.touches[0].clientX;
        const movementX = touchX - previousMouseX;
        previousMouseX = touchX;
        
        if (isDragging) {
          const deltaX = touchX - dragStartX;
          currentAngleX = initialAngleX + (deltaX * 0.15);
          currentAngleY = initialAngleY + (deltaX * 0.05);
          flickVelocityX = movementX * 0.5;
        } else {
          const rect = swingElement.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const cardCenterY = rect.top + rect.height / 2;
          
          const distX = touchX - cardCenterX;
          const distY = e.touches[0].clientY - cardCenterY;
          const distance = Math.sqrt(distX * distX + distY * distY);
          
          if (distance < 200) {
            velocityX += Math.max(Math.min(movementX * 0.05, 5), -5);
          }
        }
      }
    }, { passive: true });
    
    // Initial entrance swing
    setTimeout(() => {
      velocityX = 15;
      velocityY = 5;
    }, 300);
  });
})();
