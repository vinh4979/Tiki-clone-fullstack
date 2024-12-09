export default function Footer() {
  return (
    <div className='bg-white rounded-xs p-4 flex flex-row gap-12 mt-5 justify-center w-full'>
      {/* Cột 1: Hỗ trợ khách hàng */}
      <div className='flex flex-col w-64'>
        <span className='text-md font-medium mb-4 text-[#242424]'>
          Hỗ trợ khách hàng
        </span>
        <div className='flex flex-col gap-2'>
          <span className='text-xs text-[#808089]'>
            Hotline: <span className='font-medium'>1900-6035</span> (1000 đ/phút, 8-21h kể cả T7, CN)
          </span>
          <span className='text-xs text-[#808089]'>Các câu hỏi thường gặp</span>
          <span className='text-xs text-[#808089]'>Hướng dẫn đặt hàng</span>
          <span className='text-xs text-[#808089]'>Phương thức vận chuyển</span>
          <span className='text-xs text-[#808089]'>Chính sách đổi trả</span>
          <span className='text-xs text-[#808089]'>Hướng dẫn trả góp</span>
          <span className='text-xs text-[#808089]'>Chính sách hàng nhập khẩu</span>
          <span className='text-xs text-[#808089]'>Hỗ trợ khách hàng: hotro@tiki.vn</span>
          <span className='text-xs text-[#808089]'>Báo lỗi bảo mật: security@tiki.vn</span>
        </div>
      </div>

      {/* Cột 2: Về Tiki */}
      <div className='flex flex-col w-64'>
        <span className='text-md font-medium text-[#242424] mb-4'>Về Tiki</span>
        <div className='flex flex-col gap-2'>
          <span className='text-xs text-[#808089]'>Giới thiệu Tiki</span>
          <span className='text-xs text-[#808089]'>Tiki Blog</span>
          <span className='text-xs text-[#808089]'>Tuyển dụng</span>
          <span className='text-xs text-[#808089]'>Chính sách bảo mật thanh toán</span>
          <span className='text-xs text-[#808089]'>Chính sách bảo mật thông tin cá nhân</span>
          <span className='text-xs text-[#808089]'>Chính sách giải quyết khiếu nại</span>
          <span className='text-xs text-[#808089]'>Điều khoản sử dụng</span>
          <span className='text-xs text-[#808089]'>Giới thiệu Tiki Xu</span>
          <span className='text-xs text-[#808089]'>Tiếp thị liên kết cùng Tiki</span>
          <span className='text-xs text-[#808089]'>Bán hàng doanh nghiệp</span>
          <span className='text-xs text-[#808089]'>Điều kiện vận chuyển</span>
        </div>
      </div>

      {/* Cột 3: Hợp tác và liên kết */}
      <div className='flex flex-col gap-2'>
        <span className='text-md font-medium text-[#242424] mb-4'>
          Hợp tác và liên kết
        </span>
        <span className='text-xs text-[#808089]'>Quy chế hoạt động Sàn GDTMĐT</span>
        <span className='text-xs text-[#808089]'>Bán hàng cùng Tiki</span>
        
        <span className='text-md font-medium text-[#242424] mt-4 mb-4'>Chứng nhận bởi</span>
        <div className='flex flex-row gap-2'>
          <img src='/verify-1.png' alt='verify' className='w-8 h-8' />
          <img src='/verify-2.png' alt='verify' className='w-[83px] h-8' />
          <img src='/verify-3.png' alt='verify' className='w-8 h-8' />
        </div>
      </div>

      {/* Cột 4: Phương thức thanh toán */}
      <div className='flex flex-col gap-2 w-64'>
        <span className='text-md font-medium text-[#242424] mb-4'>
          Phương thức thanh toán
        </span>
        <div className='flex flex-row gap-2 flex-wrap'>
          {[
            'tiki-payment', 'visa', 'mastercard', 'jcb', 'atm', 
            'momo', 'zalopay', 'viettelpay', 'vnpay', 'cash', 'tragop'
          ].map((payment) => (
            <img 
              key={payment}
              src={`/${payment}.svg`} 
              alt={payment}
              className='w-[35px] h-[35px]'
            />
          ))}
        </div>
        
        <span className='text-md font-medium text-[#242424] mt-4'>Dịch vụ giao hàng</span>
        <img
          src='/ship.png'
          alt='ship'
          className='w-[130px] h-[14px] ml-[-9px]'
        />
      </div>

      {/* Cột 5: Kết nối với chúng tôi */}
      <div className='flex flex-col gap-2 w-72'>
        <span className='text-md font-medium text-[#242424] mb-4'>
          Kết nối với chúng tôi
        </span>
        <div className='flex flex-row gap-2 flex-wrap'>
          {['facebook', 'youtube', 'zalo'].map((social) => (
            <img 
              key={social}
              src={`/${social}.svg`} 
              alt={social}
              className='w-[35px] h-[35px]'
            />
          ))}
        </div>

        <div>
          <span className='text-md mb-4 block font-medium text-[#242424] mt-4'>
            Tải ứng dụng trên điện thoại
          </span>
          <div className='flex flex-row gap-1 w-fit'>
            <img src='/qrcode.png' alt='QR Code' className='w-20 h-20' />
            <div className='flex flex-col gap-1 w-fit'>
              <img src='/appstore.png' alt='App Store' className='w-[130px] h-10' />
              <img src='/playstore.png' alt='Play Store' className='w-[130px] h-10' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
