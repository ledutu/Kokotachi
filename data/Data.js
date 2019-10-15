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
        contact: 'Vui lòng tạo tài khoản tại đây để kokotachi hỗ trợ bạn tốt hơn',
        likeCounting: 5,
        commentCounting: 10,
    },
    {
        id: 1,
        image: 'https://admin.kokotachi.com/storage/articles/2019/08/5d42892fea70e_2-1519411445161838536977.jpg',
        title: "Tuyển nhân viên bảo trì, sửa chữa xe hơi cho công ty Mercedes-benz",
        datePosting: "29 Tháng 5, 2019",
        button: 'Tuyển dụng',
        //content
        position: 'Nhân viên bảo trì',
        jobInfo: 'Sửa chữa, lắp đặt phụ tùng xe oto.\nBảo dưỡng và kiểm tra xe.',
        condition: 'Chỉ tuyển nhân viên có chứng chỉ Seibishi ở Nhật.',
        jobStyle: 'Toàn thời gian',
        jobTime: '9:30 AM - 6:00 PM',
        salaryPerHour: 316.800,
        workAt: 'Tottori Prefecture - Chi nhánh Yonago\nHyogo Prefecture - Chi nhánh Nishinomiya\nOsaka Prefecture - Cửa hàng Osaka',
        contact: 'Vui lòng tạo tài khoản tại đây để kokotachi hỗ trợ bạn tốt hơn',
        note: 'Lương: \nTùy theo năng lực, trình độ, theo chứng chỉ cơ khí\nChứng chỉ cơ khí bậc 3: 1,600 Yên/1 giờ\nChứng chỉ cơ khí bậc 2: 1,800/1 giờ\n\n'
            + 'Tăng ca thoải mái Việc cực nhiều ( tăng ca lương up 25%)\n\nThưởng: 1 năm 1 lần 200.000'
            + '\nLương cơ bản: \n1,800 yên x 8 giờ = 14,400 yên\n\n14,400 yên x 22 ngày = 316,800 yên\n'
            + 'ĐẶC BIỆT CÁC ỨNG VIÊN Ở TỈNH TOTTORI SẼ CÓ HỖ TRỢ TIỀN KÝ TÚC XÁ',
        likeCounting: 5,
        commentCounting: 10,
    },
    {
        id: 2,
        image: 'https://admin.kokotachi.com/storage/articles/2019/08/5d43dffc24224_caption.jpg',
        title: "Tuyển nhân viên bán hàng tại Chiba",
        datePosting: "29 Tháng 5, 2019",
        button: 'Tuyển dụng',
        //content
        position: 'Nhân viên bán hàng',
        jobInfo: 'Bán túi xách hàng hiệu',
        condition: 'Trình độ giao tiếp N2 trở lên (Không yêu cầu bằng cấp)\nVisa du học (Công ty sẽ hỗ trợ thủ tục xin visa)',
        jobStyle: 'Bán thời gian',
        jobTime: '8:00 AM - 8:00 PM',
        salaryPerHour: 1400,
        workAt: 'Chiba Prefecture - Chiba City - Shisui Premium Outlet',
        contact: 'Vui lòng tạo tài khoản tại đây để kokotachi hỗ trợ bạn tốt hơn',
        likeCounting: 5,
        commentCounting: 10,
    },
    {
        id: 3,
        image: 'https://admin.kokotachi.com/storage/articles/2019/05/5cef6390b44bf_thiet-ke-nha-hang-truyen-thong-han-quoc-8.jpg',
        title: "[Việc làm thêm ở Tokyo] làm việc tại nhà hàng Hàn Quốc",
        datePosting: "29 Tháng 5, 2019",
        button: 'Tuyển dụng',
        //content
        position: 'Làm việc tại nhà hàng Hàn Quốc',
        jobInfo: 'Nhân viên làm bếp tại nhà hàng Hàn Quốc',
        condition: 'Tiếng Nhật N4, N3.',
        jobStyle: 'Bán thời gian',
        jobTime: '5:00 PM - 12:00 PM',
        salaryPerHour: '1,050¥ ~ 1,100',
        workAt: 'Tokyo - Chuo Ward',
        near: 'Gần ga Mikata (三鷹) tuyến Chuo - Sobu line (総武緩行線) khoảng 1 phút đi bộ.',
        contact: 'Vui lòng tạo tài khoản tại đây để kokotachi hỗ trợ bạn tốt hơn',
        note: 'Có thể thương lượng lại giờ làm việc\nLàm được 3 buổi trở lên\nLương trainning 1050 Yên/ giờ, trainning 1-2 tháng\nGiờ nghỉ vẫn được tính lương.\nHỗ trợ 100% tiền tàu.\nCó cơm nhân viên. ',
        likeCounting: 5,
        commentCounting: 10,
    },
];

const ApartmentData = [
    {
        id: 0,
        image: 'https://admin.kokotachi.com/storage/articles/2019/08/5d42886dc8de2_376--0eee33ee3b1ca17b5d3012d773872790.jpg',
        title: "Cho thuê nhà tỉnh Saitama, vùng Kanto",
        datePosting: "30 Tháng 8, 2019",
        button: 'Thông tin',

        //Content
        apartInfo: "",
        area: 'Saitama Prefecture - Kawaguchi City',
        acreage: '50 m2',
        near: 'Đi bộ 7 phút từ ga Kawaguchi',
        note: '- Nhà kiểu 3DK\n- Nhà rộng nên sức chứa có thể chứa được nhiều người.',
        contact: 'Vui lòng tạo tài khoản tại đây để kokotachi hỗ trợ bạn tốt hơn'
    },
    {
        id: 1,
        image: 'https://admin.kokotachi.com/storage/articles/2019/08/5d428898175bc_station_ph_12_nakano.jpg',
        title: "Cho thuê nhà khu vực Nakano, Tokyo",
        datePosting: "30 Tháng 8, 2019",
        button: 'Thông tin',

        //Content
        apartInfo: "",
        area: 'Saitama Prefecture - Kawaguchi City',
        acreage: '50 m2',
        near: 'Đi bộ 7 phút từ ga Kawaguchi',
        note: '- Nhà kiểu 3DK\n- Nhà rộng nên sức chứa có thể chứa được nhiều người.',
        contact: 'Vui lòng tạo tài khoản tại đây để kokotachi hỗ trợ bạn tốt hơn'


    },
    {
        id: 2,
        image: 'https://admin.kokotachi.com/storage/articles/2019/08/5d4298af440aa_fussa8.jpg',
        title: "Cho thuê nhà khu vực Fussa, Tokyo",
        datePosting: "30 Tháng 8, 2019",
        button: 'Thông tin',

        //Content
        apartInfo: "",
        area: 'Saitama Prefecture - Kawaguchi City',
        acreage: '50 m2',
        near: 'Đi bộ 7 phút từ ga Kawaguchi',
        note: '- Nhà kiểu 3DK\n- Nhà rộng nên sức chứa có thể chứa được nhiều người.',
        contact: 'Vui lòng tạo tài khoản tại đây để kokotachi hỗ trợ bạn tốt hơn'
    },
    {
        id: 3,
        image: 'https://admin.kokotachi.com/storage/articles/2019/08/5d42a609e92b9_2010_0036_SugamoSt_01.jpg',
        title: "Cho thuê nhà khu vực ga Sugamo, Tokyo",
        datePosting: "30 Tháng 8, 2019",
        button: 'Thông tin',

        //Content
        apartInfo: "",
        area: 'Saitama Prefecture - Kawaguchi City',
        acreage: '50 m2',
        near: 'Đi bộ 7 phút từ ga Kawaguchi',
        note: '- Nhà kiểu 3DK\n- Nhà rộng nên sức chứa có thể chứa được nhiều người.',
        contact: 'Vui lòng tạo tài khoản tại đây để kokotachi hỗ trợ bạn tốt hơn'
    }
];

const SocialData = [
    {
        id: 0,
        image: 'https://admin.kokotachi.com/storage/articles/2019/06/5cff32965433a_nui-phu-si-fuji.jpg',
        title: "Những kiểu \"Career women\" ở Nhật Bản",
        datePosting: "17 tháng 7, 2019",
        button: 'Xã hội',
        //content
        content: 'Một cuộc khảo sát được thực hiện với 900 phụ nữ làm việc ở độ tuổi hai mươi và ba mươi. Dựa trên câu trả lời của họ về công việc, thái độ với cuộc sống và tiêu dùng, chúng ta có thể phân họ thành bảy nhóm với những đặc điểm riêng biệt. Đây chính là những đánh giá tổng quan nhất về những người phụ nữ Nhật Bản đi làm ngày nay.\n\n'
            + '1. Nhóm chuyên nghiệp: Chuyên gia mong muốn tạo sự khác biệt\n'
            + 'Chiếm 16,2% của tất cả phụ nữ đi làm, nhóm chuyên gia có một mong muốn mạnh mẽ được thừa nhận và đánh giá cao bởi những người khác. Những người phụ nữ này có cuộc sống tập trung vào công việc nhiều hơn bình thường.\n\n'
            + 'Trong hôn nhân, họ muốn có sự ổn định và cần một mối quan hệ bình đẳng với bạn đời. Họ là những người khôn ngoan. Luôn mua sắm bằng giác quan nhạy bén của mình. Hơn nữa, họ đứng thứ hai trong số bảy nhóm với thu nhập hàng năm là 3,50 triệu yên và chi tiêu 51,483 yên.\n\n'
            + 'Mặc dù chi tiêu nhiều cho bản thân, nhưng họ rất thận trọng và quản lý tiền bạc một cách có hệ thống. Họ thường là những người trong lĩnh vực giáo dục, hoặc làm việc tại các trường học. \n'
            + 'Đây là nhóm bị ghét nhất bởi họ quá mạnh mẽ và tự chủ, trong khi những người đàn ông không hề thích điều đó.\n'
            + '2. Nhóm tích cực: Không bao giờ dừng lại, luôn tiến về phía trước. Nhóm này chiếm 12,8% phụ nữ đi làm. Họ là những người tích cực, luôn tìm cách hoàn thành bản thân trong cả công việc và cuộc sống cá nhân.\n'
            + 'Công việc chiếm hầu hết thời gian của họ, bên cạnh đó là tình yêu lạc quan và cuộc sống luôn được lên kế hoạch. Họ có rất nhiều mối quan hệ và có thể kết bạn với bất kỳ ai. Họ luôn luôn bận rộn để tạo kết nối.\n'
            + 'Họ khai thác tất cả báo chí, truyền hình và mạng xã hội để thu thập thông tin và sử dụng đầy đủ các trang web so sánh mua sắm. Nhóm này cũng bị ghét trong xã hội bởi sự phóng khoáng và lối sống hiện đại.\n'
            + '3. Nhóm thích thể hiện: Luôn tìm cách đáp ứng mong muốn cá nhân. Chiếm tới 14,3% những phụ nữ đi làm, đặc điểm kỳ lạ của nhóm này là luôn muốn thể hiện khả năng của mình và khiến người khác phải ngưỡng mộ, thường nằm trong độ tuổi 20.\n'
            + 'Phần lớn thời gian họ ở ngoài đường phố, ghé thăm những địa điểm nổi tiếng, đông người và thích hợp tác với những người khác. Họ kết bạn thật nhiều ngoài đời thực lẫn trên mạng xã hội, thích vui chơi, và show những gì nổi trội để người khác phải ngưỡng mộ.\n'
            + 'Họ kiếm được 3,736 triệu yên mỗi năm, thu nhập cao nhất trong bảy nhóm. Và chi tiêu cũng nhiều nhất, họ thích mua sắm và yêu thời trang, sống tận hưởng cho hiện tại thay vì tiết kiệm tiền. Về mặt nghề nghiệp, một số lượng khá lớn là trong bán lẻ và dịch vụ.\n',
        images: [
            {
                uri: 'https://kokotachi.com/assets/photos/37/kisspng-creative-professional-job-h5-creative-professional-women-5a9e71a2d04943.6547083515203332188531.jpg?',
                source: 'https://vi.kisspng.com/kisspng-ylob7l/'
            },
            {
                uri: 'https://kokotachi.com/assets/photos/37/71d0724088b5847a21f405cada7b5fc97081816d.jpg?',
                source: 'http://phunuxuavanay.vn/phu-nu-dep/phu-nu-hien-dai-lam-on-dung-chi-dep-tam-hon-433.html'
            },
            {
                uri: 'https://kokotachi.com/assets/photos/37/2.jpg?',
                source: 'http://hrg.vn/chi-tiet/su-hy-sinh-vi-gia-dinh-cua-nguoi-phu-nu-nhat-ban-c1271.html'
            }
        ]
    },
    {
        id: 1,
        image: 'https://admin.kokotachi.com/storage/articles/2019/06/5cfde3ed8c7cf_dat-nuoc-nhat-ban.jpg',
        title: "Chuyện kết hôn ở Nhật Bản",
        datePosting: "12 tháng 6, 2019",
        button: 'Xã hội',
        //content
        content: 'Một cuộc khảo sát được thực hiện với 900 phụ nữ làm việc ở độ tuổi hai mươi và ba mươi. Dựa trên câu trả lời của họ về công việc, thái độ với cuộc sống và tiêu dùng, chúng ta có thể phân họ thành bảy nhóm với những đặc điểm riêng biệt. Đây chính là những đánh giá tổng quan nhất về những người phụ nữ Nhật Bản đi làm ngày nay.\n\n'
            + '1. Nhóm chuyên nghiệp: Chuyên gia mong muốn tạo sự khác biệt\n'
            + 'Chiếm 16,2% của tất cả phụ nữ đi làm, nhóm chuyên gia có một mong muốn mạnh mẽ được thừa nhận và đánh giá cao bởi những người khác. Những người phụ nữ này có cuộc sống tập trung vào công việc nhiều hơn bình thường.\n\n'
            + 'Trong hôn nhân, họ muốn có sự ổn định và cần một mối quan hệ bình đẳng với bạn đời. Họ là những người khôn ngoan. Luôn mua sắm bằng giác quan nhạy bén của mình. Hơn nữa, họ đứng thứ hai trong số bảy nhóm với thu nhập hàng năm là 3,50 triệu yên và chi tiêu 51,483 yên.\n\n'
            + 'Mặc dù chi tiêu nhiều cho bản thân, nhưng họ rất thận trọng và quản lý tiền bạc một cách có hệ thống. Họ thường là những người trong lĩnh vực giáo dục, hoặc làm việc tại các trường học. \n'
            + 'Đây là nhóm bị ghét nhất bởi họ quá mạnh mẽ và tự chủ, trong khi những người đàn ông không hề thích điều đó.\n'
            + '2. Nhóm tích cực: Không bao giờ dừng lại, luôn tiến về phía trước. Nhóm này chiếm 12,8% phụ nữ đi làm. Họ là những người tích cực, luôn tìm cách hoàn thành bản thân trong cả công việc và cuộc sống cá nhân.\n'
            + 'Công việc chiếm hầu hết thời gian của họ, bên cạnh đó là tình yêu lạc quan và cuộc sống luôn được lên kế hoạch. Họ có rất nhiều mối quan hệ và có thể kết bạn với bất kỳ ai. Họ luôn luôn bận rộn để tạo kết nối.\n'
            + 'Họ khai thác tất cả báo chí, truyền hình và mạng xã hội để thu thập thông tin và sử dụng đầy đủ các trang web so sánh mua sắm. Nhóm này cũng bị ghét trong xã hội bởi sự phóng khoáng và lối sống hiện đại.\n'
            + '3. Nhóm thích thể hiện: Luôn tìm cách đáp ứng mong muốn cá nhân. Chiếm tới 14,3% những phụ nữ đi làm, đặc điểm kỳ lạ của nhóm này là luôn muốn thể hiện khả năng của mình và khiến người khác phải ngưỡng mộ, thường nằm trong độ tuổi 20.\n'
            + 'Phần lớn thời gian họ ở ngoài đường phố, ghé thăm những địa điểm nổi tiếng, đông người và thích hợp tác với những người khác. Họ kết bạn thật nhiều ngoài đời thực lẫn trên mạng xã hội, thích vui chơi, và show những gì nổi trội để người khác phải ngưỡng mộ.\n'
            + 'Họ kiếm được 3,736 triệu yên mỗi năm, thu nhập cao nhất trong bảy nhóm. Và chi tiêu cũng nhiều nhất, họ thích mua sắm và yêu thời trang, sống tận hưởng cho hiện tại thay vì tiết kiệm tiền. Về mặt nghề nghiệp, một số lượng khá lớn là trong bán lẻ và dịch vụ.\n',
        images: [
            {
                uri: 'https://kokotachi.com/assets/photos/37/elle-viet-nam-hon-nhan-nhat-ban-2.jpg?',
                source: 'https://www.elle.vn/the-gioi-van-hoa/nhat-ban-khi-ket-hon-ma-khong-can-hen-ho'
            },
            {
                uri: 'https://kokotachi.com/assets/photos/37/Fado.VN_1516272179.5952.jpg?',
                source: 'https://fado.vn/blog/xu-huong-thoi-trang-nhat-ban-duoc-ua-chuong-nhat-2018.n1374/'
            },
            {
                uri: 'https://kokotachi.com/assets/photos/37/2325170dac4736973229d4fa402ae6c8.jpg?',
                source: 'https://www.pinterest.com/pin/62839357283864903/'
            }
        ]
    },
    {
        id: 2,
        image: 'https://admin.kokotachi.com/storage/articles/2019/06/5cff2a31bbb93_photo1538100662050-15381006620511196318163.jpg',
        title: "3 kiểu \"Career women\" nổi bật ở Nhật Bản",
        datePosting: "12 tháng 6, 2019",
        button: 'Xã hội',
        //content
        content: 'Một cuộc khảo sát được thực hiện với 900 phụ nữ làm việc ở độ tuổi hai mươi và ba mươi. Dựa trên câu trả lời của họ về công việc, thái độ với cuộc sống và tiêu dùng, chúng ta có thể phân họ thành bảy nhóm với những đặc điểm riêng biệt. Đây chính là những đánh giá tổng quan nhất về những người phụ nữ Nhật Bản đi làm ngày nay.\n\n'
            + '1. Nhóm chuyên nghiệp: Chuyên gia mong muốn tạo sự khác biệt\n'
            + 'Chiếm 16,2% của tất cả phụ nữ đi làm, nhóm chuyên gia có một mong muốn mạnh mẽ được thừa nhận và đánh giá cao bởi những người khác. Những người phụ nữ này có cuộc sống tập trung vào công việc nhiều hơn bình thường.\n\n'
            + 'Trong hôn nhân, họ muốn có sự ổn định và cần một mối quan hệ bình đẳng với bạn đời. Họ là những người khôn ngoan. Luôn mua sắm bằng giác quan nhạy bén của mình. Hơn nữa, họ đứng thứ hai trong số bảy nhóm với thu nhập hàng năm là 3,50 triệu yên và chi tiêu 51,483 yên.\n\n'
            + 'Mặc dù chi tiêu nhiều cho bản thân, nhưng họ rất thận trọng và quản lý tiền bạc một cách có hệ thống. Họ thường là những người trong lĩnh vực giáo dục, hoặc làm việc tại các trường học. \n'
            + 'Đây là nhóm bị ghét nhất bởi họ quá mạnh mẽ và tự chủ, trong khi những người đàn ông không hề thích điều đó.\n'
            + '2. Nhóm tích cực: Không bao giờ dừng lại, luôn tiến về phía trước. Nhóm này chiếm 12,8% phụ nữ đi làm. Họ là những người tích cực, luôn tìm cách hoàn thành bản thân trong cả công việc và cuộc sống cá nhân.\n'
            + 'Công việc chiếm hầu hết thời gian của họ, bên cạnh đó là tình yêu lạc quan và cuộc sống luôn được lên kế hoạch. Họ có rất nhiều mối quan hệ và có thể kết bạn với bất kỳ ai. Họ luôn luôn bận rộn để tạo kết nối.\n'
            + 'Họ khai thác tất cả báo chí, truyền hình và mạng xã hội để thu thập thông tin và sử dụng đầy đủ các trang web so sánh mua sắm. Nhóm này cũng bị ghét trong xã hội bởi sự phóng khoáng và lối sống hiện đại.\n'
            + '3. Nhóm thích thể hiện: Luôn tìm cách đáp ứng mong muốn cá nhân. Chiếm tới 14,3% những phụ nữ đi làm, đặc điểm kỳ lạ của nhóm này là luôn muốn thể hiện khả năng của mình và khiến người khác phải ngưỡng mộ, thường nằm trong độ tuổi 20.\n'
            + 'Phần lớn thời gian họ ở ngoài đường phố, ghé thăm những địa điểm nổi tiếng, đông người và thích hợp tác với những người khác. Họ kết bạn thật nhiều ngoài đời thực lẫn trên mạng xã hội, thích vui chơi, và show những gì nổi trội để người khác phải ngưỡng mộ.\n'
            + 'Họ kiếm được 3,736 triệu yên mỗi năm, thu nhập cao nhất trong bảy nhóm. Và chi tiêu cũng nhiều nhất, họ thích mua sắm và yêu thời trang, sống tận hưởng cho hiện tại thay vì tiết kiệm tiền. Về mặt nghề nghiệp, một số lượng khá lớn là trong bán lẻ và dịch vụ.\n',
        images: [
            {
                uri: 'https://kokotachi.com/assets/photos/37/blog-2-edit.jpg?',
                source: 'https://lorimork.com/the-busy-career-woman-excuse-and-being-real-life-lean/'
            },
            {
                uri: 'https://kokotachi.com/assets/photos/37/photo-2-1503803225807.jpg?',
                source: 'http://kenh14.vn/himono-onna-co-mot-the-he-phu-nu-ca-kho-cham-nguong-30-ma-khong-thiet-yeu-duong-bua-bon-khac-nguoi-o-nhat-ban-20170827101534892.chn'
            },
            {
                uri: 'https://kokotachi.com/assets/photos/37/NEOBK-1966562.jpg?',
                source: 'http://www.cdjapan.co.jp/product/NEOBK-1966562'
            }
        ]
    },
    {
        id: 3,
        image: 'https://admin.kokotachi.com/storage/articles/2019/05/5ce77d3483332_winter-in-hokkaido-background-japan-images-wallpaper-1152x720.jpg',
        title: "Tâm sự của một du học sinh Việt Nam tại Nhật (Phần 2)",
        datePosting: "12 tháng 6, 2019",
        button: 'Xã hội',
        //content
        content: 'Một cuộc khảo sát được thực hiện với 900 phụ nữ làm việc ở độ tuổi hai mươi và ba mươi. Dựa trên câu trả lời của họ về công việc, thái độ với cuộc sống và tiêu dùng, chúng ta có thể phân họ thành bảy nhóm với những đặc điểm riêng biệt. Đây chính là những đánh giá tổng quan nhất về những người phụ nữ Nhật Bản đi làm ngày nay.\n\n'
            + '1. Nhóm chuyên nghiệp: Chuyên gia mong muốn tạo sự khác biệt\n'
            + 'Chiếm 16,2% của tất cả phụ nữ đi làm, nhóm chuyên gia có một mong muốn mạnh mẽ được thừa nhận và đánh giá cao bởi những người khác. Những người phụ nữ này có cuộc sống tập trung vào công việc nhiều hơn bình thường.\n\n'
            + 'Trong hôn nhân, họ muốn có sự ổn định và cần một mối quan hệ bình đẳng với bạn đời. Họ là những người khôn ngoan. Luôn mua sắm bằng giác quan nhạy bén của mình. Hơn nữa, họ đứng thứ hai trong số bảy nhóm với thu nhập hàng năm là 3,50 triệu yên và chi tiêu 51,483 yên.\n\n'
            + 'Mặc dù chi tiêu nhiều cho bản thân, nhưng họ rất thận trọng và quản lý tiền bạc một cách có hệ thống. Họ thường là những người trong lĩnh vực giáo dục, hoặc làm việc tại các trường học. \n'
            + 'Đây là nhóm bị ghét nhất bởi họ quá mạnh mẽ và tự chủ, trong khi những người đàn ông không hề thích điều đó.\n'
            + '2. Nhóm tích cực: Không bao giờ dừng lại, luôn tiến về phía trước. Nhóm này chiếm 12,8% phụ nữ đi làm. Họ là những người tích cực, luôn tìm cách hoàn thành bản thân trong cả công việc và cuộc sống cá nhân.\n'
            + 'Công việc chiếm hầu hết thời gian của họ, bên cạnh đó là tình yêu lạc quan và cuộc sống luôn được lên kế hoạch. Họ có rất nhiều mối quan hệ và có thể kết bạn với bất kỳ ai. Họ luôn luôn bận rộn để tạo kết nối.\n'
            + 'Họ khai thác tất cả báo chí, truyền hình và mạng xã hội để thu thập thông tin và sử dụng đầy đủ các trang web so sánh mua sắm. Nhóm này cũng bị ghét trong xã hội bởi sự phóng khoáng và lối sống hiện đại.\n'
            + '3. Nhóm thích thể hiện: Luôn tìm cách đáp ứng mong muốn cá nhân. Chiếm tới 14,3% những phụ nữ đi làm, đặc điểm kỳ lạ của nhóm này là luôn muốn thể hiện khả năng của mình và khiến người khác phải ngưỡng mộ, thường nằm trong độ tuổi 20.\n'
            + 'Phần lớn thời gian họ ở ngoài đường phố, ghé thăm những địa điểm nổi tiếng, đông người và thích hợp tác với những người khác. Họ kết bạn thật nhiều ngoài đời thực lẫn trên mạng xã hội, thích vui chơi, và show những gì nổi trội để người khác phải ngưỡng mộ.\n'
            + 'Họ kiếm được 3,736 triệu yên mỗi năm, thu nhập cao nhất trong bảy nhóm. Và chi tiêu cũng nhiều nhất, họ thích mua sắm và yêu thời trang, sống tận hưởng cho hiện tại thay vì tiết kiệm tiền. Về mặt nghề nghiệp, một số lượng khá lớn là trong bán lẻ và dịch vụ.\n',
        images: [
            {
                uri: 'https://camnanggiaoduc.org/wp-content/uploads/2017/12/cach-tu-choi-loi-moi-di-choi.jpg',
                source: 'camnanggiaoduc.org'
            },
            {
                uri: 'https://www.kotoba.fr/wp-content/uploads/2017/12/gintama-episode-kanpai-sante-japonais.jpg',
                source: 'vuighe.net'
            },
            {
                uri: 'https://kokotachi.com/assets/photos/37/2.jpg?',
                source: 'http://hrg.vn/chi-tiet/su-hy-sinh-vi-gia-dinh-cua-nguoi-phu-nu-nhat-ban-c1271.html'
            }
        ]
    },
];

const CosmeticData = [
    {
        id: 0,
        image: 'https://admin.kokotachi.com/storage/articles/2019/05/5cdad6a7a4bcb_PAK86_okesyouhin_TP_V.jpg',
        title: "Mỹ phẩm trong đời sống của mọi người (Phần 2)",
        datePosting: "08 tháng 8, 2019",
        button: 'Chia sẽ',

        //content
        content: 'Xin chào mọi người! Vẫn ở chủ đề "\Mỹ phẩm\", '
            + 'lần này kokotachi đã tìm được rất nhiều loại mỹ phẩm được yêu thích ở Nhật nên chúng tôi rất muốn'
            + 'chia sẻ với mọi người. Hôm nay, chúng tôi sẽ đem đến thông tin về các loại sản phẩm sữa rửa mặt đang'
            + 'được yêu thích ở Nhật.\n'
            + '1. Đầu tiên chúng tôi muốn giới thiệu loại sữa rửa mặt đang đứng ở vị trí thứ nhất,'
            + 'đó là loại "\MANNAN JELLY HIDRO Wash\" của thương hiệu Pluest. Đây là loại sữa rửa mặt giữ ẩm được '
            + 'sử dụng trong liệu pháp dưỡng ẩm bằng cơ chế rửa mặt độc đáo trong khi giữ ẩm cho da. '
            + 'Dưới sự theo dõi của bác sĩ da liễu loại sữa rửa mặt này tương thích với cả da khô và da '
            + 'nhạy cảm và chức năng hấp thụ lỗ chân lông. Ngoài ra, các hạt mềm có nguồn gốc từ Konjac (Mannan Jelly)'
            + 'nhẹ nhàng thúc đẩy lưu thông máu, dẫn đến một làn da rõ ràng, ẩm ướt.\n'
            + 'Sau đây là một vài ý kiến của khách hàng đã sử dụng qua sản phẩm này:\n'
            + '• Ý kiến của một chị có làn da khô "\Tôi thật sự ngạc nhiên với sữa rửa mặt này và muốn tiếp tục sử dụng nữa. Tôi cho rằng mình đã tìm được loại sữa rửa mặt yêu thích để dưỡng da rồi\"\n'
            + '• Một bạn khác lại cho rằng "\Ban đầu tôi hơi ngạc nhiên với việc rửa mặt bằng kem dưỡng ẩm, thật ra tôi nghĩ rằng nếu quá tập trung vào việc giữ ẩm thì sẽ làm suy yếu khả năng làm sạch và cũng khó để tin rằng có thể loại bỏ bụi bẩn mặt sau của lỗ chân lông. Nhưng thật bất ngờ, loại sữa rửa mặt này lại dễ dàng rửa sạch được. Vì sản phẩm được đồng phát triển bởi các bác sĩ da liễu nên những bạn có làn da nhạy cảm hoàn toàn có thể yên tâm nhé\n"'
            + '• Một bạn cho biết bạn ấy có thể cảm nhận được những hạt mềm từ Konjac mịn màng. Loại này dễ rửa giống như những loại sữa rửa mặt thông thường nhưng sau khi rửa sạch thì cảm thấy ẩm từ bên trong da. Vì sữa rửa mặt này không có mùi nên những bạn bị dị ứng với mùi hương có thể sử dụng. Bạn ấy muốn tiếp tục sử dụng lâu dài vì với trường hợp dầu và độ ẩm trên da đã được loại bỏ rất nhiều với sữa rửa mặt.\n'
            + '2. Đứng vị trí thứ 2 là sữa rửa mặt làm mịn da của "BIORE". Chắc hẳn Biore không còn là sản phẩm xa lạ với người tiêu dùng Việt Nam. Loại sản phẩm đang nói ở đây dành cho những bạn quan tâm đến bụi bẩn da. Nhằm giúp giảm gánh nặng cho da, loại bỏ các vết bẩn tối màu trên lỗ chân lông, dẫn đến làn da mịn màng và không thấy lỗ chân lông.\n'
            + 'Hãy cùng chúng tôi lắng nghe một vài ý kiến của khách hàng đã sử dụng nhé:\n'
            + '• Một bạn cho biết khi sử dụng làn da của bạn ấy mềm mại và có cảm giác tuyệt vời, mùi hương cũng tốt.\n'
            + '• Thấy quảng cáo trên Twitter nên bạn này đã mua và xài thử. Khi sử dụng lần đầu làn da trở nên mịn màng.\n'
            + '• Chỉ mới 2 ngày sau khi sử dụng bạn ấy cảm thấy lỗ chân lông quanh mũi trở nên mỏng hơn.\n'
            + '3. Sữa rửa mặt làm sạch da của thương hiệu "SUISAI" đang đứng vị trí thứ 3. Đây là loại sữa rửa mặt chăm sóc da tận dụng những lợi ích quá trình lên men, là loại bọt làm sạch Enzyme giúp loại bỏ lỗ chân lông tối màu, vết bẩn và các vết nứt trên lỗ chân lông và làm sạch làn da mịn màng.\n'
            + 'Và sau đây là một vài ý kiến của các bạn đã sử dụng qua sản phẩm:\n'
            + '• Bạn này cho biết bạn ấy rất lo lắng về việc chăm sóc và làm sạm da lỗ chân lông nên bạn ấy đã mua và xài thử. Khi sử dụng bạn ấy đã bị thu hút bởi những gói rửa và còn cảm thấy làn da trở nên mịn màng.\n'
            + '• Một ý kiến khác cho biết bạn ấy đã mua sữa rửa mặt này khi nghe mọi người truyền tai nhau nhiều. Khi sử dụng bạn ấy cảm thấy làn da sạch sẽ và mịn màng hơn. Và bạn ấy cũng bày tỏ ý định sẽ sử dụng loại sản phẩm này lâu dài hơn.\n'
            + '• Còn một bạn cho biết trước đây bạn ấy đã sử dụng loại sữa rửa mặt khác nhưng không có cảm giác thay đổi. Khi bạn ấy sử dụng loại sữa rửa mặt này thì bạn ấy cảm thấy làn da trở nên sạch và đẹp hơn.\n'
            + 'Kokotachi đã chia sẻ cho các bạn một số sữa rửa mặt được ưa chuộng tại Nhật, hy vọng những thông tin trên sẽ giúp ích cho các bạn! ',
        images: [
            {
                uri: 'https://kokotachi.com/assets/photos/37/images.jpg?',
                source: 'galmoni.com'
            },
            {
                uri: 'https://kokotachi.com/assets/photos/37/474882329.g_0-w_g.jpg?',
                source: 'amazon.co.jp'
            },
            {
                uri: 'https://kokotachi.com/assets/photos/37/6263813_3L1.jpg?',
                source: 'amazon.co.jp'
            }
        ]
    },
    {
        id: 1,
        image: 'https://admin.kokotachi.com/storage/articles/2019/05/5cdad6a7a4bcb_PAK86_okesyouhin_TP_V.jpg',
        title: "Mỹ phẩm trong đời sống của mọi người (Phần 3)",
        datePosting: "08 tháng 8, 2019",
        button: 'Chia sẽ',

        //content
        content: 'Xin chào mọi người! Vẫn ở chủ đề "\Mỹ phẩm\", '
            + 'lần này kokotachi đã tìm được rất nhiều loại mỹ phẩm được yêu thích ở Nhật nên chúng tôi rất muốn'
            + 'chia sẻ với mọi người. Hôm nay, chúng tôi sẽ đem đến thông tin về các loại sản phẩm sữa rửa mặt đang'
            + 'được yêu thích ở Nhật.\n'
            + '1. Đầu tiên chúng tôi muốn giới thiệu loại sữa rửa mặt đang đứng ở vị trí thứ nhất,'
            + 'đó là loại "\MANNAN JELLY HIDRO Wash\" của thương hiệu Pluest. Đây là loại sữa rửa mặt giữ ẩm được '
            + 'sử dụng trong liệu pháp dưỡng ẩm bằng cơ chế rửa mặt độc đáo trong khi giữ ẩm cho da. '
            + 'Dưới sự theo dõi của bác sĩ da liễu loại sữa rửa mặt này tương thích với cả da khô và da '
            + 'nhạy cảm và chức năng hấp thụ lỗ chân lông. Ngoài ra, các hạt mềm có nguồn gốc từ Konjac (Mannan Jelly)'
            + 'nhẹ nhàng thúc đẩy lưu thông máu, dẫn đến một làn da rõ ràng, ẩm ướt.\n'
            + 'Sau đây là một vài ý kiến của khách hàng đã sử dụng qua sản phẩm này:\n'
            + '• Ý kiến của một chị có làn da khô "\Tôi thật sự ngạc nhiên với sữa rửa mặt này và muốn tiếp tục sử dụng nữa. Tôi cho rằng mình đã tìm được loại sữa rửa mặt yêu thích để dưỡng da rồi\"\n'
            + '• Một bạn khác lại cho rằng "\Ban đầu tôi hơi ngạc nhiên với việc rửa mặt bằng kem dưỡng ẩm, thật ra tôi nghĩ rằng nếu quá tập trung vào việc giữ ẩm thì sẽ làm suy yếu khả năng làm sạch và cũng khó để tin rằng có thể loại bỏ bụi bẩn mặt sau của lỗ chân lông. Nhưng thật bất ngờ, loại sữa rửa mặt này lại dễ dàng rửa sạch được. Vì sản phẩm được đồng phát triển bởi các bác sĩ da liễu nên những bạn có làn da nhạy cảm hoàn toàn có thể yên tâm nhé\n"'
            + '• Một bạn cho biết bạn ấy có thể cảm nhận được những hạt mềm từ Konjac mịn màng. Loại này dễ rửa giống như những loại sữa rửa mặt thông thường nhưng sau khi rửa sạch thì cảm thấy ẩm từ bên trong da. Vì sữa rửa mặt này không có mùi nên những bạn bị dị ứng với mùi hương có thể sử dụng. Bạn ấy muốn tiếp tục sử dụng lâu dài vì với trường hợp dầu và độ ẩm trên da đã được loại bỏ rất nhiều với sữa rửa mặt.\n'
            + '2. Đứng vị trí thứ 2 là sữa rửa mặt làm mịn da của "BIORE". Chắc hẳn Biore không còn là sản phẩm xa lạ với người tiêu dùng Việt Nam. Loại sản phẩm đang nói ở đây dành cho những bạn quan tâm đến bụi bẩn da. Nhằm giúp giảm gánh nặng cho da, loại bỏ các vết bẩn tối màu trên lỗ chân lông, dẫn đến làn da mịn màng và không thấy lỗ chân lông.\n'
            + 'Hãy cùng chúng tôi lắng nghe một vài ý kiến của khách hàng đã sử dụng nhé:\n'
            + '• Một bạn cho biết khi sử dụng làn da của bạn ấy mềm mại và có cảm giác tuyệt vời, mùi hương cũng tốt.\n'
            + '• Thấy quảng cáo trên Twitter nên bạn này đã mua và xài thử. Khi sử dụng lần đầu làn da trở nên mịn màng.\n'
            + '• Chỉ mới 2 ngày sau khi sử dụng bạn ấy cảm thấy lỗ chân lông quanh mũi trở nên mỏng hơn.\n'
            + '3. Sữa rửa mặt làm sạch da của thương hiệu "SUISAI" đang đứng vị trí thứ 3. Đây là loại sữa rửa mặt chăm sóc da tận dụng những lợi ích quá trình lên men, là loại bọt làm sạch Enzyme giúp loại bỏ lỗ chân lông tối màu, vết bẩn và các vết nứt trên lỗ chân lông và làm sạch làn da mịn màng.\n'
            + 'Và sau đây là một vài ý kiến của các bạn đã sử dụng qua sản phẩm:\n'
            + '• Bạn này cho biết bạn ấy rất lo lắng về việc chăm sóc và làm sạm da lỗ chân lông nên bạn ấy đã mua và xài thử. Khi sử dụng bạn ấy đã bị thu hút bởi những gói rửa và còn cảm thấy làn da trở nên mịn màng.\n'
            + '• Một ý kiến khác cho biết bạn ấy đã mua sữa rửa mặt này khi nghe mọi người truyền tai nhau nhiều. Khi sử dụng bạn ấy cảm thấy làn da sạch sẽ và mịn màng hơn. Và bạn ấy cũng bày tỏ ý định sẽ sử dụng loại sản phẩm này lâu dài hơn.\n'
            + '• Còn một bạn cho biết trước đây bạn ấy đã sử dụng loại sữa rửa mặt khác nhưng không có cảm giác thay đổi. Khi bạn ấy sử dụng loại sữa rửa mặt này thì bạn ấy cảm thấy làn da trở nên sạch và đẹp hơn.\n'
            + 'Kokotachi đã chia sẻ cho các bạn một số sữa rửa mặt được ưa chuộng tại Nhật, hy vọng những thông tin trên sẽ giúp ích cho các bạn! ',
        images: [
            {
                uri: 'https://kokotachi.com/assets/photos/37/26134-time.jpg?',
                source: 'favor.life'
            },
            {
                uri: 'https://kokotachi.com/assets/photos/37/23425-time.jpg?',
                source: 'favor.life'
            },
            {
                uri: 'https://kokotachi.com/assets/photos/37/ds_opera042206_w490.jpg?',
                source: 'nlab.itmedia.co.jp'
            }
        ]
    },
    {
        id: 2,
        image: 'https://admin.kokotachi.com/storage/articles/2019/05/5cdad6a7a4bcb_PAK86_okesyouhin_TP_V.jpg',
        title: "Mỹ phẩm trong đời sống của mọi người (Phần 4)",
        datePosting: "08 tháng 8, 2019",
        button: 'Chia sẽ',

        //content
        content: 'Xin chào mọi người! Vẫn ở chủ đề "\Mỹ phẩm\", '
            + 'lần này kokotachi đã tìm được rất nhiều loại mỹ phẩm được yêu thích ở Nhật nên chúng tôi rất muốn'
            + 'chia sẻ với mọi người. Hôm nay, chúng tôi sẽ đem đến thông tin về các loại sản phẩm sữa rửa mặt đang'
            + 'được yêu thích ở Nhật.\n'
            + '1. Đầu tiên chúng tôi muốn giới thiệu loại sữa rửa mặt đang đứng ở vị trí thứ nhất,'
            + 'đó là loại "\MANNAN JELLY HIDRO Wash\" của thương hiệu Pluest. Đây là loại sữa rửa mặt giữ ẩm được '
            + 'sử dụng trong liệu pháp dưỡng ẩm bằng cơ chế rửa mặt độc đáo trong khi giữ ẩm cho da. '
            + 'Dưới sự theo dõi của bác sĩ da liễu loại sữa rửa mặt này tương thích với cả da khô và da '
            + 'nhạy cảm và chức năng hấp thụ lỗ chân lông. Ngoài ra, các hạt mềm có nguồn gốc từ Konjac (Mannan Jelly)'
            + 'nhẹ nhàng thúc đẩy lưu thông máu, dẫn đến một làn da rõ ràng, ẩm ướt.\n'
            + 'Sau đây là một vài ý kiến của khách hàng đã sử dụng qua sản phẩm này:\n'
            + '• Ý kiến của một chị có làn da khô "\Tôi thật sự ngạc nhiên với sữa rửa mặt này và muốn tiếp tục sử dụng nữa. Tôi cho rằng mình đã tìm được loại sữa rửa mặt yêu thích để dưỡng da rồi\"\n'
            + '• Một bạn khác lại cho rằng "\Ban đầu tôi hơi ngạc nhiên với việc rửa mặt bằng kem dưỡng ẩm, thật ra tôi nghĩ rằng nếu quá tập trung vào việc giữ ẩm thì sẽ làm suy yếu khả năng làm sạch và cũng khó để tin rằng có thể loại bỏ bụi bẩn mặt sau của lỗ chân lông. Nhưng thật bất ngờ, loại sữa rửa mặt này lại dễ dàng rửa sạch được. Vì sản phẩm được đồng phát triển bởi các bác sĩ da liễu nên những bạn có làn da nhạy cảm hoàn toàn có thể yên tâm nhé\n"'
            + '• Một bạn cho biết bạn ấy có thể cảm nhận được những hạt mềm từ Konjac mịn màng. Loại này dễ rửa giống như những loại sữa rửa mặt thông thường nhưng sau khi rửa sạch thì cảm thấy ẩm từ bên trong da. Vì sữa rửa mặt này không có mùi nên những bạn bị dị ứng với mùi hương có thể sử dụng. Bạn ấy muốn tiếp tục sử dụng lâu dài vì với trường hợp dầu và độ ẩm trên da đã được loại bỏ rất nhiều với sữa rửa mặt.\n'
            + '2. Đứng vị trí thứ 2 là sữa rửa mặt làm mịn da của "BIORE". Chắc hẳn Biore không còn là sản phẩm xa lạ với người tiêu dùng Việt Nam. Loại sản phẩm đang nói ở đây dành cho những bạn quan tâm đến bụi bẩn da. Nhằm giúp giảm gánh nặng cho da, loại bỏ các vết bẩn tối màu trên lỗ chân lông, dẫn đến làn da mịn màng và không thấy lỗ chân lông.\n'
            + 'Hãy cùng chúng tôi lắng nghe một vài ý kiến của khách hàng đã sử dụng nhé:\n'
            + '• Một bạn cho biết khi sử dụng làn da của bạn ấy mềm mại và có cảm giác tuyệt vời, mùi hương cũng tốt.\n'
            + '• Thấy quảng cáo trên Twitter nên bạn này đã mua và xài thử. Khi sử dụng lần đầu làn da trở nên mịn màng.\n'
            + '• Chỉ mới 2 ngày sau khi sử dụng bạn ấy cảm thấy lỗ chân lông quanh mũi trở nên mỏng hơn.\n'
            + '3. Sữa rửa mặt làm sạch da của thương hiệu "SUISAI" đang đứng vị trí thứ 3. Đây là loại sữa rửa mặt chăm sóc da tận dụng những lợi ích quá trình lên men, là loại bọt làm sạch Enzyme giúp loại bỏ lỗ chân lông tối màu, vết bẩn và các vết nứt trên lỗ chân lông và làm sạch làn da mịn màng.\n'
            + 'Và sau đây là một vài ý kiến của các bạn đã sử dụng qua sản phẩm:\n'
            + '• Bạn này cho biết bạn ấy rất lo lắng về việc chăm sóc và làm sạm da lỗ chân lông nên bạn ấy đã mua và xài thử. Khi sử dụng bạn ấy đã bị thu hút bởi những gói rửa và còn cảm thấy làn da trở nên mịn màng.\n'
            + '• Một ý kiến khác cho biết bạn ấy đã mua sữa rửa mặt này khi nghe mọi người truyền tai nhau nhiều. Khi sử dụng bạn ấy cảm thấy làn da sạch sẽ và mịn màng hơn. Và bạn ấy cũng bày tỏ ý định sẽ sử dụng loại sản phẩm này lâu dài hơn.\n'
            + '• Còn một bạn cho biết trước đây bạn ấy đã sử dụng loại sữa rửa mặt khác nhưng không có cảm giác thay đổi. Khi bạn ấy sử dụng loại sữa rửa mặt này thì bạn ấy cảm thấy làn da trở nên sạch và đẹp hơn.\n'
            + 'Kokotachi đã chia sẻ cho các bạn một số sữa rửa mặt được ưa chuộng tại Nhật, hy vọng những thông tin trên sẽ giúp ích cho các bạn! ',
        images: [
            {
                uri: 'https://kokotachi.com/assets/photos/37/nivea.png?',
                source: 'excite.co.jp'
            },
            {
                uri: 'https://kokotachi.com/assets/photos/37/474882329.g_0-w_g.jpg?',
                source: 'qoo10.com'
            },
            {
                uri: 'https://kokotachi.com/assets/photos/37/curel.png?',
                source: 'amazon.com'
            }
        ]
    },
    {
        id: 3,
        image: 'https://admin.kokotachi.com/storage/articles/2019/08/5d4288bd7e221_1518078340.jpg',
        title: "Những loại mỹ phẩm Nhật Bản được săn lùng nhiều nhất tại Việt Nam (Phần 1)",
        datePosting: "08 tháng 8, 2019",
        button: 'Chia sẽ',

        //content
        content: 'Xin chào mọi người! Vẫn ở chủ đề "\Mỹ phẩm\", '
            + 'lần này kokotachi đã tìm được rất nhiều loại mỹ phẩm được yêu thích ở Nhật nên chúng tôi rất muốn'
            + 'chia sẻ với mọi người. Hôm nay, chúng tôi sẽ đem đến thông tin về các loại sản phẩm sữa rửa mặt đang'
            + 'được yêu thích ở Nhật.\n'
            + '1. Đầu tiên chúng tôi muốn giới thiệu loại sữa rửa mặt đang đứng ở vị trí thứ nhất,'
            + 'đó là loại "\MANNAN JELLY HIDRO Wash\" của thương hiệu Pluest. Đây là loại sữa rửa mặt giữ ẩm được '
            + 'sử dụng trong liệu pháp dưỡng ẩm bằng cơ chế rửa mặt độc đáo trong khi giữ ẩm cho da. '
            + 'Dưới sự theo dõi của bác sĩ da liễu loại sữa rửa mặt này tương thích với cả da khô và da '
            + 'nhạy cảm và chức năng hấp thụ lỗ chân lông. Ngoài ra, các hạt mềm có nguồn gốc từ Konjac (Mannan Jelly)'
            + 'nhẹ nhàng thúc đẩy lưu thông máu, dẫn đến một làn da rõ ràng, ẩm ướt.\n'
            + 'Sau đây là một vài ý kiến của khách hàng đã sử dụng qua sản phẩm này:\n'
            + '• Ý kiến của một chị có làn da khô "\Tôi thật sự ngạc nhiên với sữa rửa mặt này và muốn tiếp tục sử dụng nữa. Tôi cho rằng mình đã tìm được loại sữa rửa mặt yêu thích để dưỡng da rồi\"\n'
            + '• Một bạn khác lại cho rằng "\Ban đầu tôi hơi ngạc nhiên với việc rửa mặt bằng kem dưỡng ẩm, thật ra tôi nghĩ rằng nếu quá tập trung vào việc giữ ẩm thì sẽ làm suy yếu khả năng làm sạch và cũng khó để tin rằng có thể loại bỏ bụi bẩn mặt sau của lỗ chân lông. Nhưng thật bất ngờ, loại sữa rửa mặt này lại dễ dàng rửa sạch được. Vì sản phẩm được đồng phát triển bởi các bác sĩ da liễu nên những bạn có làn da nhạy cảm hoàn toàn có thể yên tâm nhé\n"'
            + '• Một bạn cho biết bạn ấy có thể cảm nhận được những hạt mềm từ Konjac mịn màng. Loại này dễ rửa giống như những loại sữa rửa mặt thông thường nhưng sau khi rửa sạch thì cảm thấy ẩm từ bên trong da. Vì sữa rửa mặt này không có mùi nên những bạn bị dị ứng với mùi hương có thể sử dụng. Bạn ấy muốn tiếp tục sử dụng lâu dài vì với trường hợp dầu và độ ẩm trên da đã được loại bỏ rất nhiều với sữa rửa mặt.\n'
            + '2. Đứng vị trí thứ 2 là sữa rửa mặt làm mịn da của "BIORE". Chắc hẳn Biore không còn là sản phẩm xa lạ với người tiêu dùng Việt Nam. Loại sản phẩm đang nói ở đây dành cho những bạn quan tâm đến bụi bẩn da. Nhằm giúp giảm gánh nặng cho da, loại bỏ các vết bẩn tối màu trên lỗ chân lông, dẫn đến làn da mịn màng và không thấy lỗ chân lông.\n'
            + 'Hãy cùng chúng tôi lắng nghe một vài ý kiến của khách hàng đã sử dụng nhé:\n'
            + '• Một bạn cho biết khi sử dụng làn da của bạn ấy mềm mại và có cảm giác tuyệt vời, mùi hương cũng tốt.\n'
            + '• Thấy quảng cáo trên Twitter nên bạn này đã mua và xài thử. Khi sử dụng lần đầu làn da trở nên mịn màng.\n'
            + '• Chỉ mới 2 ngày sau khi sử dụng bạn ấy cảm thấy lỗ chân lông quanh mũi trở nên mỏng hơn.\n'
            + '3. Sữa rửa mặt làm sạch da của thương hiệu "SUISAI" đang đứng vị trí thứ 3. Đây là loại sữa rửa mặt chăm sóc da tận dụng những lợi ích quá trình lên men, là loại bọt làm sạch Enzyme giúp loại bỏ lỗ chân lông tối màu, vết bẩn và các vết nứt trên lỗ chân lông và làm sạch làn da mịn màng.\n'
            + 'Và sau đây là một vài ý kiến của các bạn đã sử dụng qua sản phẩm:\n'
            + '• Bạn này cho biết bạn ấy rất lo lắng về việc chăm sóc và làm sạm da lỗ chân lông nên bạn ấy đã mua và xài thử. Khi sử dụng bạn ấy đã bị thu hút bởi những gói rửa và còn cảm thấy làn da trở nên mịn màng.\n'
            + '• Một ý kiến khác cho biết bạn ấy đã mua sữa rửa mặt này khi nghe mọi người truyền tai nhau nhiều. Khi sử dụng bạn ấy cảm thấy làn da sạch sẽ và mịn màng hơn. Và bạn ấy cũng bày tỏ ý định sẽ sử dụng loại sản phẩm này lâu dài hơn.\n'
            + '• Còn một bạn cho biết trước đây bạn ấy đã sử dụng loại sữa rửa mặt khác nhưng không có cảm giác thay đổi. Khi bạn ấy sử dụng loại sữa rửa mặt này thì bạn ấy cảm thấy làn da trở nên sạch và đẹp hơn.\n'
            + 'Kokotachi đã chia sẻ cho các bạn một số sữa rửa mặt được ưa chuộng tại Nhật, hy vọng những thông tin trên sẽ giúp ích cho các bạn! ',
        images: [
            {
                uri: 'https://kokotachi.com/assets/photos/37/images.jpg?',
                source: 'galmoni.com'
            },
            {
                uri: 'https://kokotachi.com/assets/photos/37/untitled.png?',
                source: 'amazon.co.jp'
            },
            {
                uri: 'https://kokotachi.com/assets/photos/37/6263813_3L1.jpg?',
                source: 'amazon.co.jp'
            }
        ]
    }
];

const ChurchData = [
    {
        id: 0,
        image: 'https://admin.kokotachi.com/storage/article_church/5ca63de6da394_adachi1-thumbnail400x.jpg',
        title: "Nhà thờ Adachi Catholic",
        datePosting: "04 tháng 4, 2019",
        button: 'Nhà thờ',

        //content
        address: '3-40-27 Kohoku, Adachi-ku, Tokyo 123-0872',
        english: 'Không',
        vietnam: 'Không',
        japan: '9:00',
        normal: '6:45 thứ 2 đến thứ 7 hàng tuần. 19:00 thứ 6 tuần đầu tiên trong tháng .',
        sunday: 'Có 2 lớp: Trường tiểu học bậc thấp, trường tiểu học bậc cao và trường trung học cơ sở. Cả 2 lớp đều vào Chủ nhật, sau Thánh lễ 9h00 khoảng 1 tiếng.',
        volunteerActivity: 'Giúp đỡ các chị em trong “Missionaries of Charity” vào ngày thứ 7 thứ 2, thứ 3 và thứ 4 mỗi tháng với dịch vụ bữa ăn cho người già.',
        detail: 'Năm 1957, một quý ông của thị trấn, ông Fukuji Funatsu đã đóng góp tài sản đất đai của mình là 300 tsubo với mục đích là nuôi dưỡng những người trẻ tuổi trong khu. Khu ấy đã bắt đầu như một tiểu giáo xứ của nhà thờ Mikawashima vào năm 1958. Sau đó, có nhiều tài sản được mua từ ông Funatsu. '
            + 'Theo di chúc ban đầu của ông Funatsu, đội Hướng đạo sinh số 6 được thành lập vào năm 1964. Năm 1967, trường mẫu giáo Adachi Salesio đã được thành lập và nhà thờ trở thành giáo xứ của nhà thờ Mikawashima. Năm 1972, Nữ hướng đạo sinh Tokyo số 104 đã được thành lập.'
            + 'Năm 1986, tiểu giáo xứ bắt đầu độc lập khỏi nhà thở Mikawashima và thành lập giáo xứ Adachi mới. Mặc dù nhà thờ đã được bắt đầu từ một nhóm rất nhỏ, khi giáo dân tăng lên giáo xứ đã phát triển dần dần bằng cách lặp lại công việc sửa chữa và mở rộng của nơi này. Vào tháng 11 năm 1997, nhà thờ hiện tại đã được xây dựng mới kể từ khi mưa dầm qua mái nhà và trở nên rất tồi tệ.'
            + 'Giáo sĩ đầu tiên và là người đứng đầu trường mẫu giáo là Fr. Zenkichi Josef Emi. Sau đó, Fr. Demleitner Karl, Fr.Renato Stefani, Fr. Shoichiro Kosaka, Fr. Giovanni Petracco, Fr. Richard Smith, Fr. Attilio Felicani, Fr. Joseph De Witte, Cha Gentaro Yamano, Fr. Yoshihiro Omaki, Fr.Cesar Fraga và Fr. Yasuto Ishii được chỉ định đến nhà thờ và nhà trẻ này. Cha Nakamaro Abe cũng đã giúp đỡ giáo hội. '
            + 'Nhà thờ Adachi hiện tại:'
            + 'Nhà thờ và trường mẫu giáo nằm trong cùng một sân nhà thờ. Cả nam hướng đạo và nữ hướng đạo đều rất năng động. Có khoảng 80 người tham dự Thánh lễ Chủ nhật và sau Thánh lễ, họ tận hưởng thời gian uống cà phê trao đổi hỗ trợ lẫn nhau và cảm thấy trong gia đình như đoàn kết trong bầu không khí thân mật. Trong khu phố chị em Chúa Giesu Hài đồng và truyền giáo từ thiện sống tạo ra môi trường tối để cùng làm việc cho các hoạt động phúc lợi chung.'
            + 'Cộng đồng nhà thờ nghĩ cách chăm sóc người bệnh, người già, cách tổ chức giáo lý. Gần đây, nhiều bà mẹ trẻ đưa các em bé đến tham dự Thánh lễ và hy vọng họ sẽ tham gia nhiều hơn để tăng thêm giáo dân.'
            + 'Bằng việc tái tổ chức tổng giáo phận Tokyo, nhà thờ Adachi đã thược về Đơn vị hợp tác Tin lành adachi cùng với nhà thờ Mikawashima, nhà thờ Machiya, nhà thờ Umeda và nhà thờ Arakawa. Cho đến bây giờ không có thay đổi lớn nhưng dần dần các thiết bị mới sẽ được áp dụng cho tương lai của giáo hội.'
            + '(Tháng 8 năm 2005 Thư tin tức Tổng giáo phận Tokyo)',
        source: 'http://tokyo.catholic.jp'
    },
    {
        id: 1,
        image: 'https://admin.kokotachi.com/storage/article_church/5ca63e1d49eb1_akatsutsumi-thumbnail400x.jpg',
        title: "Nhà thờ Akatsutsumi Catholic",
        datePosting: "04 tháng 4, 2019",
        button: 'Nhà thờ',

        //content
        address: '3-20-1 Akatsutsumi, Setagaya-ku, Tokyo 156-0044',
        english: 'Không',
        vietnam: 'Không',
        japan: '9:00 / 11:00',
        normal: '10:30 thứ 6 tuần đầu tiên trong tháng',
        sunday: 'Học kinh thánh: Thứ tư: 10h00, thứ năm: 19h00, Thứ 7: 10h00 (tiếng Nhật)',
        volunteerActivity: 'Nam hướng đạo sinh Setagaya Troop thứ 9 Nữ hướng đạo sinh Tokyo Troop thứ 91',
        detail: 'Lịch sử hình thành'
            + 'Vào năm 1949, khi ngọn lửa âm ỉ của chiến tranh thế giới thứ 2 vẫn còn ở một số nơi ở Tokyo thì các hoạt động của nhà thờ đã được bắt đầu bởi ba nhà truyền giáo đã trở về từ Trung Quốc vào năm 1948. Một ngôi nhà nhỏ kiểu Nhật Bản trong khu vườn đổ nát phía trước bụi tre dọc theo con đường từ ga Tamaden Matsubara, nơi được miêu tả trong tiểu thuyết của ông Shusaku Endo, là nhà thờ đầu tiên. Trước đó, cha Boule Roland đã trải qua căn bệnh lao phổi.'
            + 'Cha Parent Evariste có kiến thức tốt về Kanji ( chữ Hán Trung Quốc). Cha Blain Real trẻ trung với mái tóc vàng. Cả ba người cha đều cử hành thánh lễ đầu tiên tại nhà thờ Akazutsumi ngoài ra còn mở trường mẫu giáo và thành lập hướng đạo sinh. Trong thời gian đó có khoảng 50 người và 20 thành viên nam hướng đạo sinh đã tham dự thánh lễ ngày chủ nhật tại thính phòng hẹp và giản dị. Sau này, nữ hướng đạo sinh cũng được thành lập. Nhà thờ, trường mẫu giáo và nam nữ hướng đạo sinh đã hợp nhất thành một để hỗ trợ lẫn nhau vì sự phát triển của cộng đồng giáo xứ.'
            + 'Từ năm 1960, chợ nhà thờ đã được bắt đầu mỗi năm với mục đích là xây dựng nhà thờ mới và lợi nhuận trong năm đầu tiên là 50.000 yên. Năm 1963, chợ được tổ chức với sự hợp tác của trường mẫu giáo và Hướng đạo sinh ngày 22 tháng 11 khi Tổng thống J.F.Kennedy bị ám sát vào ngày 23 tháng 11 tại Nhật Bản. Sau đó, nữ hướng đạo sinh tham gia vào chợ và sau đó ngôi chợ trở thành ngôi chợ lớn nhất trong khu vực.'
            + 'Vào năm 1967, với ước muốn được ấp ủ từ lâu là xây dựng nhà thờ mới đã được thực hiện. Năm 1972, nhà thờ trở thành giáo xứ của giáo hội Setagaya và trở thành giáo hội Akazutsumi độc lập vào năm 1974. Mỗi ngày chủ nhật sẽ là ngày dành cho Đức Kito, vị vua mà nhà thờ này đã cống hiến. '
            + 'Nhà nguyện cho thấy bầu không khí ánh sáng của Canada được thiết kế bởi những người truyền giáo nước ngoài Quebec, đặc biệt là Fr.Gilles Caron.',
        website: 'http://www7a.biglobe.ne.jp/~akatsutsumi_catholic/',
        source: 'http://tokyo.catholic.jp'
    },
    {
        id: 2,
        image: 'https://admin.kokotachi.com/storage/article_church/5ca63e6ea2a9f_akabane1s-thumbnail400x.jpg',
        title: "Nhà thờ Akabane Catholic",
        datePosting: "04 tháng 4, 2019",
        button: 'Nhà thờ',

        //content
        address: '2-1-12 Akabane, Kita-ku, Tokyo 115-0045',
        english: 'Không',
        vietnam: 'Không',
        japan: '7:00 / 9:00 / 17:00',
        normal: '6:30 thứ 2 đến thứ 7 hàng tuần 6:30 & 10:00 thứ 6 tuần đầu tiên trong tháng.',
        sunday: 'Các lớp học: 9h00 sáng- 12h00 Lớp học ngày chủ nhật dành cho học sinh trung học cơ sở Hiệu trưởng: Mục sư Fr. Minoru B.Nagao',
        volunteerActivity: 'Giúp đỡ các chị em trong “Missionaries of Charity” vào ngày thứ 7 thứ 2, thứ 3 và thứ 4 mỗi tháng với dịch vụ bữa ăn cho người già.',
        detail: 'Trước khi nói về lịch sử của nhà thờ Aakabane, chúng ta hãy cùng xem nhiệm vụ đầu tiên ở Tokyo. Với điều kiện Fr. Heronimo de Jesus, cha M. Kolbe đã khao khát tìm thấy một ngôi nhà tôn giáo ở Tokyo, họ đã bắt đầu sứ mệnh của Tu viện Conventual tại một tòa nhà gạch đỏ không cháy ở Akabane.'
            + 'Sau chiến tranh thế giới thứ 2, ý tưởng về việc lập Giáo hội Akabane đã được nêu ra do sự cần thiết cấp bạch của việc xây dựng trường học ở Tokyo để hình thành các trường học mới trong các tu viện vì các nhà truyền giáo của Tu viện thông thường đã giải quyết nhiệm vụ của họ ngay từ đầu. Vì mục đích này, Fr. Donatus Goszinski, OFM.Conv và anh Zenon Zebrowski đã được đưa đến Tokyo. Họ đã tìm thấy vùng đất vốn là tàn tích của nhà máy bị đốt cháy bởi các cuộc công kích của chiến tranh. Cha Samuel Rosenbeiger, OFM.Conv. sau đó là provincial của OFM.Conv. tại Nhật Bản đã mua với sự đóng góp từ USA.'
            + 'Vào ngày 8 tháng 11 năm 1947 (Showa 22) ngày Đức Mẹ vô nhiễm, việc đặt viên đá đã được thực hiện. Vào ngày 15 tháng 8 năm 1949, nhà thờ Công giáo Akabane đã được chính thức là một giáo xứ mới ra đời của Tổng giáo phận Tokyo. Giáo hội công giáo Akabane chính thức được thành lập với số thành viên gồm 20 giáo dân. Vào tháng 11 năm 1951, nhà nguyện mới đã được hoàn thành và nghi thức dâng lễ khánh thành Đức Mẹ Giả định đã được Đức Hồng Y Peter Tatsuo Doi tổ chức. Giáo hội đã được truyền giáo bởi giáo sĩ Truyền giáo dòng Phanxico và người sáng lập là Thánh Phanxico Assisi, người tạo dựng hòa bình vĩ đại và là người yêu thiên nhiên.'
            + 'Khi Cha Samuel Rosenbeiger nhìn thấy Giáo hội thánh hiến mới vào năm 1951, ông đã viết những hồi ức của mình như sau: “ Giáo hội mới này dường như nói với tôi về tình yêu của nhiều nhà hảo tâm Mỹ đã hợp tác để quyên góp cho tòa nhà Giáo hội này mặc dù họ thường xuyên phải chịu đựng bệnh tật hoặc ngày càng già yếu.” trong cuốn sách tưởng niệm nhà thờ kỷ niệm 25 năm. Có một văn phòng việc làm vào thời điểm đó trong sân nhà thờ nhưng sau đó trường mẫu giáo Hiệp sĩ Đức Mẹ đã được thành lập trực thuộc Giáo hội. Nhiều đứa trẻ đã được tốt nghiệp mẫu giáo.'
            + 'Nhà thờ từng được công nhận từ nền tảng ga Akabane nhưng bây giờ đã được nhìn thoáng qua bởi các tòa nhà cao tầng từ nhà ga.'
            + 'Chúng tôi tự hào rằng nhà thờ đã được chọn là một trong 100 cảnh đẹp của phường Kita ở Tokyo.'
            + 'Trong khu vườn nhà thờ, nhiều hoa nở vào mỗi mùa và đã trở thành như một ốc đào của khu vực. Vào ngày Đức mẹ đồng trinh, ngày 15 tháng 8 mọi người đã vẽ bức tượng và ngồi trên chiếc xe cùng với tiếng hát và diễu hành trên các phố mua sắm. Theo cách đó, Giáo hội nhìn đến sự thân mật với người dân khu vực Akabane.',
        source: 'http://tokyo.catholic.jp'
    },
    {
        id: 3,
        image: 'https://admin.kokotachi.com/storage/article_church/5ca63eae04ce5_asakusa1-thumbnail400x.jpg',
        title: "Nhà thờ Asakusa Catholic",
        datePosting: "04 tháng 4, 2019",
        button: 'Nhà thờ',

        //content
        address: '3-40-27 Kohoku, Adachi-ku, Tokyo 123-0872',
        english: 'Không',
        vietnam: 'Không',
        japan: '9:00',
        normal: '6:45 thứ 2 đến thứ 7 hàng tuần. 19:00 thứ 6 tuần đầu tiên trong tháng .',
        sunday: 'Có 2 lớp: Trường tiểu học bậc thấp, trường tiểu học bậc cao và trường trung học cơ sở. Cả 2 lớp đều vào Chủ nhật, sau Thánh lễ 9h00 khoảng 1 tiếng.',
        volunteerActivity: 'Giúp đỡ các chị em trong “Missionaries of Charity” vào ngày thứ 7 thứ 2, thứ 3 và thứ 4 mỗi tháng với dịch vụ bữa ăn cho người già.',
        detail: 'Năm 1957, một quý ông của thị trấn, ông Fukuji Funatsu đã đóng góp tài sản đất đai của mình là 300 tsubo với mục đích là nuôi dưỡng những người trẻ tuổi trong khu. Khu ấy đã bắt đầu như một tiểu giáo xứ của nhà thờ Mikawashima vào năm 1958. Sau đó, có nhiều tài sản được mua từ ông Funatsu. '
            + 'Theo di chúc ban đầu của ông Funatsu, đội Hướng đạo sinh số 6 được thành lập vào năm 1964. Năm 1967, trường mẫu giáo Adachi Salesio đã được thành lập và nhà thờ trở thành giáo xứ của nhà thờ Mikawashima. Năm 1972, Nữ hướng đạo sinh Tokyo số 104 đã được thành lập.'
            + 'Năm 1986, tiểu giáo xứ bắt đầu độc lập khỏi nhà thở Mikawashima và thành lập giáo xứ Adachi mới. Mặc dù nhà thờ đã được bắt đầu từ một nhóm rất nhỏ, khi giáo dân tăng lên giáo xứ đã phát triển dần dần bằng cách lặp lại công việc sửa chữa và mở rộng của nơi này. Vào tháng 11 năm 1997, nhà thờ hiện tại đã được xây dựng mới kể từ khi mưa dầm qua mái nhà và trở nên rất tồi tệ.'
            + 'Giáo sĩ đầu tiên và là người đứng đầu trường mẫu giáo là Fr. Zenkichi Josef Emi. Sau đó, Fr. Demleitner Karl, Fr.Renato Stefani, Fr. Shoichiro Kosaka, Fr. Giovanni Petracco, Fr. Richard Smith, Fr. Attilio Felicani, Fr. Joseph De Witte, Cha Gentaro Yamano, Fr. Yoshihiro Omaki, Fr.Cesar Fraga và Fr. Yasuto Ishii được chỉ định đến nhà thờ và nhà trẻ này. Cha Nakamaro Abe cũng đã giúp đỡ giáo hội. '
            + 'Nhà thờ Adachi hiện tại:'
            + 'Nhà thờ và trường mẫu giáo nằm trong cùng một sân nhà thờ. Cả nam hướng đạo và nữ hướng đạo đều rất năng động. Có khoảng 80 người tham dự Thánh lễ Chủ nhật và sau Thánh lễ, họ tận hưởng thời gian uống cà phê trao đổi hỗ trợ lẫn nhau và cảm thấy trong gia đình như đoàn kết trong bầu không khí thân mật. Trong khu phố chị em Chúa Giesu Hài đồng và truyền giáo từ thiện sống tạo ra môi trường tối để cùng làm việc cho các hoạt động phúc lợi chung.'
            + 'Cộng đồng nhà thờ nghĩ cách chăm sóc người bệnh, người già, cách tổ chức giáo lý. Gần đây, nhiều bà mẹ trẻ đưa các em bé đến tham dự Thánh lễ và hy vọng họ sẽ tham gia nhiều hơn để tăng thêm giáo dân.'
            + 'Bằng việc tái tổ chức tổng giáo phận Tokyo, nhà thờ Adachi đã thược về Đơn vị hợp tác Tin lành adachi cùng với nhà thờ Mikawashima, nhà thờ Machiya, nhà thờ Umeda và nhà thờ Arakawa. Cho đến bây giờ không có thay đổi lớn nhưng dần dần các thiết bị mới sẽ được áp dụng cho tương lai của giáo hội.'
            + '(Tháng 8 năm 2005 Thư tin tức Tổng giáo phận Tokyo)',
        source: 'http://tokyo.catholic.jp'
    }
];

const EventData = [
    {
        id: 0,
        image: 'https://eventon.jp/uploads/2019/06/97b112487e8b1a8ddfdff107c6ea6653.jpg',
        title: "SPECIAL WORKSHOP NGÀY 7/9! TỔ CHỨC HỘI THẢO ĐẶC BIỆT PEET (BE BOP CREW)",
        datePosting: "07 Tháng 9, 2019",
        button: 'Sự kiện',

        //content
        day: "2019/09/07(saturday)",
        period: '18:00 ~ 19:30',
        begin: 'Thời gian bắt đầu [18:00]',
        registerPeopleNumber: 0,

        nameCost: 'PEET WS',
        cost: '3,000 Yên',
        paymentMethod: 'Thanh toán tại cổng sự kiện',
        registerTime: 'Từ ngày đăng tin tuyển dụng',
        registerStoppingTime: 'Trước 18:00 ngày 07/09/2019',
        place: 'STUDIO MISSION（Shibuya）８０１',
        address: '8F 9F Tầng 8 - 9,  tòa nhà Shin Omose tòa thứ 4, 2-10-12, Dogenzaka, Shibuya - ku, Tokyo',
        ageLimited: 'Trên 20 tuổi dưới 50 tuổi',
        url: ['https://www.hot-pants.info', 'https://eventon.jp'],
        hoster: 'SCOOBY-DOO',
        eventID: 'E17537',
        detail: 'Giai điệu của linh hồn, từ những điều cơ bản nhất đến ứng dụng của nhạc rock, Bất kể bạn thuộc thể loại âm nhạc gì, cách bạn cảm nhận ra sao và cách bạn làm ra âm nhạc như thế nào, \n'
            + 'Những bài học về cách nhận thức và khám phá ra các nhịp điệu!!!!!\n\n'
            + 'Bạn sẽ không thể kiếm được một cơ hội như vầy ở Tokyo đâu, vì vậy bạn đừng bỏ lỡ WS lần này nhé!!!!!\n\n'
    },
    {
        id: 1,
        image: 'https://eventon.jp/uploads/2019/07/d6e80c553e86e82e3f2577f97e967580.JPG',
        title: "SỰ KIỆN \"TRÒ CHƠI THỰC TẾ・TRÒ CHƠI TRỰC TUYẾN\" ĐƯỢC TỔ CHỨC TẠI THÀNH PHỐ YOKOHAMA, TỈNH KANAGAWA",
        datePosting: "21 Tháng 7, 2019",
        button: 'Sự kiện',

        //content
        day: "2019/09/07(saturday)",
        period: '18:00 ~ 19:30',
        begin: 'Thời gian bắt đầu [18:00]',
        registerPeopleNumber: 2,

        nameCost: 'PEET WS',
        cost: '3,000 Yên',
        paymentMethod: 'Thanh toán tại cổng sự kiện',
        registerTime: 'Từ ngày đăng tin tuyển dụng',
        registerStoppingTime: 'Trước 18:00 ngày 07/09/2019',
        place: 'STUDIO MISSION（Shibuya）８０１',
        address: '8F 9F Tầng 8 - 9,  tòa nhà Shin Omose tòa thứ 4, 2-10-12, Dogenzaka, Shibuya - ku, Tokyo',
        ageLimited: 'Trên 20 tuổi dưới 50 tuổi',
        url: ['https://www.hot-pants.info', 'https://eventon.jp'],
        hoster: 'SCOOBY-DOO',
        eventID: 'E17537',
        detail: 'Giai điệu của linh hồn, từ những điều cơ bản nhất đến ứng dụng của nhạc rock, Bất kể bạn thuộc thể loại âm nhạc gì, cách bạn cảm nhận ra sao và cách bạn làm ra âm nhạc như thế nào, \n'
            + 'Những bài học về cách nhận thức và khám phá ra các nhịp điệu!!!!!\n\n'
            + 'Bạn sẽ không thể kiếm được một cơ hội như vầy ở Tokyo đâu, vì vậy bạn đừng bỏ lỡ WS lần này nhé!!!!!\n\n'
    },
    {
        id: 2,
        image: 'https://kokotachi.com/images/noimage.jpg',
        title: "TIỆC HALLOWEEN",
        datePosting: "27 Tháng 10, 2019",
        button: 'Sự kiện',

        //content
        day: "2019/09/07(saturday)",
        period: '18:00 ~ 19:30',
        begin: 'Thời gian bắt đầu [18:00]',
        registerPeopleNumber: 0,

        nameCost: 'PEET WS',
        cost: '3,000 Yên',
        paymentMethod: 'Thanh toán tại cổng sự kiện',
        registerTime: 'Từ ngày đăng tin tuyển dụng',
        registerStoppingTime: 'Trước 18:00 ngày 07/09/2019',
        place: 'STUDIO MISSION（Shibuya）８０１',
        address: '8F 9F Tầng 8 - 9,  tòa nhà Shin Omose tòa thứ 4, 2-10-12, Dogenzaka, Shibuya - ku, Tokyo',
        ageLimited: 'Trên 20 tuổi dưới 50 tuổi',
        url: ['https://www.hot-pants.info', 'https://eventon.jp'],
        hoster: 'SCOOBY-DOO',
        eventID: 'E17537',
        detail: 'Giai điệu của linh hồn, từ những điều cơ bản nhất đến ứng dụng của nhạc rock, Bất kể bạn thuộc thể loại âm nhạc gì, cách bạn cảm nhận ra sao và cách bạn làm ra âm nhạc như thế nào, \n'
            + 'Những bài học về cách nhận thức và khám phá ra các nhịp điệu!!!!!\n\n'
            + 'Bạn sẽ không thể kiếm được một cơ hội như vầy ở Tokyo đâu, vì vậy bạn đừng bỏ lỡ WS lần này nhé!!!!!\n\n'
    },
    {
        id: 3,
        image: 'https://eventon.jp/uploads/2019/06/e3c886aeb1793f196bf31df72a764446.jpeg',
        title: "CỘNG ĐỒNG KOEN MÙA HÈ NÀY 2019",
        datePosting: "22 Tháng 8, 2019",
        button: 'Sự kiện',

        //content
        day: "2019/09/07(saturday)",
        period: '18:00 ~ 19:30',
        begin: 'Thời gian bắt đầu [18:00]',
        registerPeopleNumber: 0,

        nameCost: 'PEET WS',
        cost: '3,000 Yên',
        paymentMethod: 'Thanh toán tại cổng sự kiện',
        registerTime: 'Từ ngày đăng tin tuyển dụng',
        registerStoppingTime: 'Trước 18:00 ngày 07/09/2019',
        place: 'STUDIO MISSION（Shibuya）８０１',
        address: '8F 9F Tầng 8 - 9,  tòa nhà Shin Omose tòa thứ 4, 2-10-12, Dogenzaka, Shibuya - ku, Tokyo',
        ageLimited: 'Trên 20 tuổi dưới 50 tuổi',
        url: ['https://www.hot-pants.info', 'https://eventon.jp'],
        hoster: 'SCOOBY-DOO',
        eventID: 'E17537',
        detail: 'Giai điệu của linh hồn, từ những điều cơ bản nhất đến ứng dụng của nhạc rock, Bất kể bạn thuộc thể loại âm nhạc gì, cách bạn cảm nhận ra sao và cách bạn làm ra âm nhạc như thế nào, \n'
            + 'Những bài học về cách nhận thức và khám phá ra các nhịp điệu!!!!!\n\n'
            + 'Bạn sẽ không thể kiếm được một cơ hội như vầy ở Tokyo đâu, vì vậy bạn đừng bỏ lỡ WS lần này nhé!!!!!\n\n'
    },

]

const ReaderData = [
    JobData[0],
    ApartmentData[1],
    SocialData[2]
];

export {
    ReaderData,
    JobData,
    ApartmentData,
    SocialData,
    CosmeticData,
    ChurchData,
    EventData
};