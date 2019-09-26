const ReaderData = [
    {
        id: 0,
        image: 'https://admin.kokotachi.com/storage/articles/2019/05/5cedff06d3ae0_001.jpg',
        title: "Dể dàng tìm việc làm thêm tại nhật nếu bạn có trình độ ngoại ngữ tốt",
        datePosting: "29 Tháng 5, 2019",
        button: 'Chia sẻ'
    },
    {
        id: 1,
        image: 'https://admin.kokotachi.com/storage/articles/2019/05/5cee01b7765f6_002.jpg',
        title: "Tháng lương đầu tiên tại Nhật Bản - góc nhìn khác",
        datePosting: "29 Tháng 5, 2019",
        button: 'Chia sẻ'
    },
    {
        id: 2,
        image: 'https://admin.kokotachi.com/storage/articles/2019/05/5cef6891d4665_Tổng-quan-Osaka.jpg',
        title: "[Việc làm chính thức ở osaka] tuyển kỹ sư cơ khí - điện",
        datePosting: "27 Tháng 6, 2019",
        button: 'Tuyển dụng'
    },
];

const JobData = [
    {
        id: 0,
        image: 'https://admin.kokotachi.com/storage/articles/2019/08/5d47e04f74311_tachiaikawa.jpg',
        title: "Tuyển nhân viên khu vực Shinagawa, Tokyo",
        datePosting: "29 Tháng 5, 2019",
        button: 'Tuyển dụng',
        //content
        position: 'Nhân viên',
        jobInfo: 'Phụ bếp tại ga Tachiaikawa',
        condition: 'Giao tiếp tương đương N3.\nCó thẻ ngân hàng Yucho và giấy chứng nhận địa chỉ.\nCó thể được làm full 25 tiếng/tuần.',
        jobStyle: 'Bán thời gian',
        jobTime: '10:00 AM - 3:00 PM\n5:00 PM - 8:00 PM',
        salaryPerHour: 1100,
        workAt: 'Tokyo - Shinagawa Ward',
        near: 'ga Tachiaikawa',
        contact: 'Vui lòng tạo tài khoản tại đây để kokotachi hỗ trợ bạn tốt hơn'
    },
    {
        id: 1,
        image: 'https://admin.kokotachi.com/storage/articles/2019/08/5d42892fea70e_2-1519411445161838536977.jpg',
        title: "Tuyển nhân viên bảo trì, sửa chữa xe hơi cho công ty Mercedes-benz",
        datePosting: "29 Tháng 5, 2019",
        button: 'Tuyển dụng',
        //content
        position: 'Nhân viên',
        jobInfo: 'Phụ bếp tại ga Tachiaikawa',
        condition: 'Giao tiếp tương đương N3.\nCó thẻ ngân hàng Yucho và giấy chứng nhận địa chỉ.\nCó thể được làm full 25 tiếng/tuần.',
        jobStyle: 'Bán thời gian',
        jobTime: '10:00 AM - 3:00 PM\n5:00 PM - 8:00 PM',
        salaryPerHour: 1100,
        near: 'ga Tachiaikawa',
        contact: 'Vui lòng tạo tài khoản tại đây để kokotachi hỗ trợ bạn tốt hơn'
    },
    {
        id: 2,
        image: 'https://admin.kokotachi.com/storage/articles/2019/08/5d43dffc24224_caption.jpg',
        title: "Tuyển nhân viên bán hàng tại Chiba",
        datePosting: "29 Tháng 5, 2019",
        button: 'Tuyển dụng',
        //content
        position: 'Nhân viên',
        jobInfo: 'Phụ bếp tại ga Tachiaikawa',
        condition: 'Giao tiếp tương đương N3.\nCó thẻ ngân hàng Yucho và giấy chứng nhận địa chỉ.\nCó thể được làm full 25 tiếng/tuần.',
        jobStyle: 'Bán thời gian',
        jobTime: '10:00 AM - 3:00 PM\n5:00 PM - 8:00 PM',
        salaryPerHour: 1100,
        near: 'ga Tachiaikawa',
        contact: 'Vui lòng tạo tài khoản tại đây để kokotachi hỗ trợ bạn tốt hơn'
    },
    {
        id: 3,
        image: 'https://admin.kokotachi.com/storage/articles/2019/05/5cef6390b44bf_thiet-ke-nha-hang-truyen-thong-han-quoc-8.jpg',
        title: "[Việc làm thêm ở Tokyo] làm việc tại nhà hàng Hàn Quốc",
        datePosting: "29 Tháng 5, 2019",
        button: 'Tuyển dụng',
        //content
        position: 'Nhân viên',
        jobInfo: 'Phụ bếp tại ga Tachiaikawa',
        condition: 'Giao tiếp tương đương N3.\nCó thẻ ngân hàng Yucho và giấy chứng nhận địa chỉ.\nCó thể được làm full 25 tiếng/tuần.',
        jobStyle: 'Bán thời gian',
        jobTime: '10:00 AM - 3:00 PM\n5:00 PM - 8:00 PM',
        salaryPerHour: 1100,
        near: 'ga Tachiaikawa',
        contact: 'Vui lòng tạo tài khoản tại đây để kokotachi hỗ trợ bạn tốt hơn'
    },
];

const ApartmentData = [
    {
        id: 0,
        image: 'https://admin.kokotachi.com/storage/articles/2019/08/5d42886dc8de2_376--0eee33ee3b1ca17b5d3012d773872790.jpg',
        title: "Cho thuê nhà tỉnh Saitama, vùng Kanto",
        datePosting: "30 Tháng 8, 2019",
        button: 'Thông tin'
    },
    {
        id: 1,
        image: 'https://admin.kokotachi.com/storage/articles/2019/08/5d428898175bc_station_ph_12_nakano.jpg',
        title: "Cho thuê nhà khu vực Nakano, Tokyo",
        datePosting: "30 Tháng 8, 2019",
        button: 'Thông tin'
    },
    {
        id: 2,
        image: 'https://admin.kokotachi.com/storage/articles/2019/08/5d4298af440aa_fussa8.jpg',
        title: "Cho thuê nhà khu vực Fussa, Tokyo",
        datePosting: "30 Tháng 8, 2019",
        button: 'Thông tin'
    },
    {
        id: 3,
        image: 'https://admin.kokotachi.com/storage/articles/2019/08/5d42a609e92b9_2010_0036_SugamoSt_01.jpg',
        title: "Cho thuê nhà khu vực ga Sugamo, Tokyo",
        datePosting: "30 Tháng 8, 2019",
        button: 'Thông tin'
    }
];

const SocialData = [
    {
        id: 0,
        image: 'https://admin.kokotachi.com/storage/articles/2019/06/5cff32965433a_nui-phu-si-fuji.jpg',
        title: "Những kiểu \"Career women\" ở Nhật Bản",
        datePosting: "17 tháng 7, 2019",
        button: 'Xã hội'
    },
    {
        id: 1,
        image: 'https://admin.kokotachi.com/storage/articles/2019/06/5cfde3ed8c7cf_dat-nuoc-nhat-ban.jpg',
        title: "Chuyện kết hôn ở Nhật Bản",
        datePosting: "12 tháng 6, 2019",
        button: 'Xã hội'
    },
    {
        id: 2,
        image: 'https://admin.kokotachi.com/storage/articles/2019/06/5cff2a31bbb93_photo1538100662050-15381006620511196318163.jpg',
        title: "3 kiểu \"Career women\" nổi bật ở Nhật Bản",
        datePosting: "12 tháng 6, 2019",
        button: 'Xã hội'
    },
    {
        id: 3,
        image: 'https://admin.kokotachi.com/storage/articles/2019/05/5ce77d3483332_winter-in-hokkaido-background-japan-images-wallpaper-1152x720.jpg',
        title: "Tâm sự của một du học sinh Việt Nam tại Nhật (Phần 2)",
        datePosting: "12 tháng 6, 2019",
        button: 'Xã hội'
    },
];

const CosmeticData = [
    {
        id: 0,
        image: 'https://admin.kokotachi.com/storage/articles/2019/05/5cdad6a7a4bcb_PAK86_okesyouhin_TP_V.jpg',
        title: "Mỹ phẩm trong đời sống của mọi người (Phần 2)",
        datePosting: "08 tháng 8, 2019",
        button: 'Chia sẽ'
    },
    {
        id: 1,
        image: 'https://admin.kokotachi.com/storage/articles/2019/05/5cdad6a7a4bcb_PAK86_okesyouhin_TP_V.jpg',
        title: "Mỹ phẩm trong đời sống của mọi người (Phần 3)",
        datePosting: "08 tháng 8, 2019",
        button: 'Chia sẽ'
    },
    {
        id: 2,
        image: 'https://admin.kokotachi.com/storage/articles/2019/05/5cdad6a7a4bcb_PAK86_okesyouhin_TP_V.jpg',
        title: "Mỹ phẩm trong đời sống của mọi người (Phần 4)",
        datePosting: "08 tháng 8, 2019",
        button: 'Chia sẽ'
    },
    {
        id: 3,
        image: 'https://admin.kokotachi.com/storage/articles/2019/08/5d4288bd7e221_1518078340.jpg',
        title: "Những loại mỹ phẩm Nhật Bản được săn lùng nhiều nhất tại Việt Nam (Phần 1)",
        datePosting: "08 tháng 8, 2019",
        button: 'Chia sẽ'
    }
];

const ChurchData = [
    {
        id: 0,
        image: 'https://admin.kokotachi.com/storage/article_church/5ca63de6da394_adachi1-thumbnail400x.jpg',
        title: "Nhà thờ Adachi Catholic",
        datePosting: "04 tháng 4, 2019",
        button: 'Nhà thờ'
    },
    {
        id: 1,
        image: 'https://admin.kokotachi.com/storage/article_church/5ca63e1d49eb1_akatsutsumi-thumbnail400x.jpg',
        title: "Nhà thờ Akatsutsumi Catholic",
        datePosting: "04 tháng 4, 2019",
        button: 'Nhà thờ'
    },
    {
        id: 2,
        image: 'https://admin.kokotachi.com/storage/article_church/5ca63e6ea2a9f_akabane1s-thumbnail400x.jpg',
        title: "Nhà thờ Akabane Catholic",
        datePosting: "04 tháng 4, 2019",
        button: 'Nhà thờ'
    },
    {
        id: 3,
        image: 'https://admin.kokotachi.com/storage/article_church/5ca63eae04ce5_asakusa1-thumbnail400x.jpg',
        title: "Nhà thờ Asakusa Catholic",
        datePosting: "04 tháng 4, 2019",
        button: 'Nhà thờ'
    }
];

const EventData = [
    {
        id: 0,
        image: 'https://eventon.jp/uploads/2019/06/97b112487e8b1a8ddfdff107c6ea6653.jpg',
        title: "SPECIAL WORKSHOP NGÀY 7/9! TỔ CHỨC HỘI THẢO ĐẶC BIỆT PEET (BE BOP CREW)",
        datePosting: "07 Tháng 9, 2019",
        button: 'Sự kiện'
    },
    {
        id: 1,
        image: 'https://eventon.jp/uploads/2019/07/d6e80c553e86e82e3f2577f97e967580.JPG',
        title: "SỰ KIỆN \"TRÒ CHƠI THỰC TẾ・TRÒ CHƠI TRỰC TUYẾN\" ĐƯỢC TỔ CHỨC TẠI THÀNH PHỐ YOKOHAMA, TỈNH KANAGAWA",
        datePosting: "21 Tháng 7, 2019",
        button: 'Sự kiện'
    },
    {
        id: 2,
        image: 'https://kokotachi.com/images/noimage.jpg',
        title: "TIỆC HALLOWEEN",
        datePosting: "27 Tháng 10, 2019",
        button: 'Sự kiện'
    },
    {
        id: 3,
        image: 'https://eventon.jp/uploads/2019/06/e3c886aeb1793f196bf31df72a764446.jpeg',
        title: "CỘNG ĐỒNG KOEN MÙA HÈ NÀY 2019",
        datePosting: "22 Tháng 8, 2019",
        button: 'Sự kiện'
    },

]

export {
    ReaderData,
    JobData,
    ApartmentData,
    SocialData,
    CosmeticData,
    ChurchData,
    EventData
};