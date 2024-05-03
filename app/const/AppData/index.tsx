import { AppResource } from '../AppResource'

export const AppData = {
  dataMenu: [
    {
      title: 'Trang chủ',
      link: '/',
    },
    {
      title: 'Chùa online',
      link: '/chua-online',
    },
    {
      title: 'Tử vi',
      link: '/tu-vi',
    },
    {
      title: 'Văn khấn',
      link: '/van-khan',
    },
    {
      title: 'kiến thức',
      link: '/kien-thuc',
    },
    {
      title: 'Du lịch',
      link: '/du-lich',
    },
  ],

  //

  dataBanner: [
    {
      img: AppResource.images.img_chua_huong_banner_1,
    },
    {
      img: AppResource.images.img_chua_yen_tu_banner_1,
    },
    {
      img: AppResource.images.img_chua_thay_banner_1,
    },
  ],
  dataAudio: [
    {
      name: 'Nhạc thiền tịnh tâm',
      link: 'https://nhacchuong123.com/nhac-chuong/abcdefghij/nhac-thien-tinh-tam-nhat-kim-anh-mp3-khong-loi.mp3',
    },
    {
      name: 'Nhạc chữa lành',
      link: 'https://nhacchuong123.com/nhac-chuong/abcdefghij/nhac-thien-tinh-tam-remix-le-bao.mp3',
    },
    {
      name: 'Thần thoại ',
      link: 'https://nhacchuong123.com/nhac-chuong/abcde/Nhac-Chuong-Than-Thoai-Piano-Jackie-Chan-Kim-Hee-Sun.mp3',
    },
  ],
  dataShop: [
    {
      title: 'Hoa qủa',
      list: [
        {
          img: AppResource.images.img_dia_cam,
          name: 'Cam mỹ',
          price: '100.000đ',
        },
        {
          img: AppResource.images.img_dia_buoi,
          name: 'Bưởi diễn',
          price: '300.000đ',
        },
        {
          img: AppResource.images.img_dia_tao,
          name: 'Táo úc',
          price: '500.000đ',
        },
        {
          img: AppResource.images.img_dia_buoi,
          name: 'Bưởi diễn',
          price: '320.000đ',
        },
      ],
    },
    {
      title: 'Nhang đèn',
      list: [
        {
          img: AppResource.images.img_nhang,
          name: 'Nhang trầm',
          price: '320.000đ',
        },
        {
          img: AppResource.images.img_nen,
          name: 'Nến phúc khí',
          price: '20.000đ',
        },
      ],
    },
  ],

  dataBuddhistScripture: [
    {
      value: 'next.js',
      label: 'Kinh pháp hoa',
      link: 'https://thuvienhoasen.org/images/file/9-dxcZ1G0QgQANlT/kinhphaphoa-htthichtriquang.pdf',
    },
    {
      value: 'sveltekit',
      label: 'Kinh phổ môn',
      link: 'https://www.daotranglienhoa.com/wp-content/uploads/2022/01/kinh_pho_mon.pdf',
    },
    {
      value: 'nuxt.js',
      label: 'Kinh di đà',
      link: 'https://chuagiacngo.com/sites/default/files/huong-dan/book_tnt/k09-kinh_a_di_da_co_bia.pdf',
    },
    {
      value: 'remix',
      label: 'Kinh địa tạng bổn nguyện',
      link: 'https://www.daotranglienhoa.com/wp-content/uploads/2022/01/kinh_dia_tang.pdf',
    },
    {
      value: 'astro',
      label: 'Kinh từ bi thuỷ sám pháp',
      link: 'https://www.tuvienphuocduc.org/kinh/tu_bi_thuy_sam_phap.pdf',
    },
  ],
}
