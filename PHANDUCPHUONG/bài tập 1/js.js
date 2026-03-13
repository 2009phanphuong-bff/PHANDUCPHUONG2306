document.addEventListener('DOMContentLoaded', function() {
    // Thêm hiệu ứng click cho menu items
    const menuItems = document.querySelectorAll('.menu li');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            menuItems.forEach(i => {
                i.style.backgroundColor = '#33b5e5';
                i.style.transform = 'scale(1)';
            });
            
            // Add active effect to clicked item
            this.style.backgroundColor = '#0099cc';
            this.style.transform = 'scale(1.02)';
            
            // Show notification
            showNotification(`Bạn đã chọn: ${this.textContent}`);
        });
    });

    // Hàm hiển thị thông báo
    function showNotification(message) {
        // Tạo notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #33b5e5;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            animation: slideIn 0.3s ease;
            cursor: pointer;
        `;
        notification.textContent = message;

        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Add to body
        document.body.appendChild(notification);

        // Click to close
        notification.addEventListener('click', function() {
            this.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                this.remove();
            }, 300);
        });

        // Auto close after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 3000);
    }

    // Thêm hiệu ứng scroll cho footer
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#0077b3';
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });

        footer.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#0099cc';
            this.style.transform = 'scale(1)';
        });
    }

    // Log thông báo responsive
    function checkResponsive() {
        const width = window.innerWidth;
        let device = 'Mobile';
        
        if (width >= 1200) {
            device = 'Large Desktop';
        } else if (width >= 768) {
            device = 'Desktop';
        } else if (width >= 600) {
            device = 'Tablet';
        }
        
        console.log(`Current view: ${device} (${width}px)`);
    }

    // Check on load
    checkResponsive();

    // Check on resize
    window.addEventListener('resize', function() {
        checkResponsive();
    });
});