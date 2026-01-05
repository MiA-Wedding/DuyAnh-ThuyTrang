/* config.template.js - FILE TEMPLATE
   App Electron sẽ replace 
*/
const WEDDING_CONFIG = {
  groomName: "Duy Anh",
  brideName: "Thuý Trang",

  weddingDate: "2026-01-10 10:30",
  location: "Trung tâm tiệc cưới Nguyên Đình tầng 3 Tascomall số 7-9 Nguyễn Văn Linh, Long Biên, Hà Nội",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://maps.app.goo.gl/fiiLzXtWs5baTDsF6",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5221.686407294913!2d105.89037697638871!3d21.050983887012627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a9acc56038bf%3A0xfe2bcf18b37652b4!2zTmd1ecOqbiDEkMOsbmggTG9uZyBCacOqbg!5e1!3m2!1svi!2s!4v1767643317423!5m2!1svi!2s",

  heroImage: "assets/hero.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/eNFkq5WhD7o",

  gallery: [
    { src: "assets/g1.jpg" },
    { src: "assets/g2.jpg" },
    { src: "assets/g3.jpg" },
    { src: "assets/g4.jpg" },
    { src: "assets/g5.jpg" },
    { src: "assets/g6.jpg" },
    { src: "assets/g7.jpg" },
    { src: "assets/g8.jpg" },
    { src: "assets/g9.jpg" },
    { src: "assets/g10.jpg" }
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: "Duy Anh",
      parents: "Bố: Hà Mạnh Hùng<br>Mẹ: Nguyễn Thị Thu Hương",
      address: "Địa chỉ: 3/129 Gia Quất, Bồ Đề, Hà Nội"
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Thuý Trang",
      parents: "Bố: Đặng Văn Điều<br>Mẹ: Đặng Thị Nhã",
      address: "Địa chỉ: 79 thôn Phú Đôi, xã Phượng Dực, Hà Nội"
    }
  },

  qr: [
    {
      src: "assets/QR01.jpg",
      title: "HA DUY ANH",
      info: "Xin trân thành cảm ơn",
    },
  ]
};
