// Script để cập nhật thông tin và xử lý sự kiện
document.addEventListener('DOMContentLoaded', function() {
    // Bạn có thể thêm các hiệu ứng hoặc xử lý ở đây
    console.log('Landing page đã sẵn sàng!');
    
    // Ví dụ: Thêm animation khi click vào contact card
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Thêm hiệu ứng click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // Bạn có thể thêm các hàm xử lý khác ở đây
    // Ví dụ: Cập nhật thông tin động
    function updatePersonalInfo(name, birthday) {
        const nameElement = document.querySelector('.info-item:first-child p');
        const birthdayElement = document.querySelector('.info-item:last-child p');
        
        if (nameElement) nameElement.textContent = name;
        if (birthdayElement) birthdayElement.textContent = birthday;
    }

    // Gọi hàm cập nhật thông tin (nếu cần)
    // updatePersonalInfo('Tên của bạn', 'Ngày sinh của bạn');
});