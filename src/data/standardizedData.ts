import type { QAItem } from "./qaData";

export const standardizedCategories = ["An toàn – An ninh", "Khai thác (FOM)", "Dịch vụ & CSKH"];

export const standardizedData: QAItem[] = [
  { id: 1, question: `(AT.1) 1. To request a normal access to the flight deck, what shall the purser do
in details? State out the correct phrase with the password for normal
entry.
2. What must crew member check and confirm with pilot in the flight
deck:
- before opening the flight deck door?
- after entering or leaving the cockpit?`, answer: `CCOM 2.11.3
* TVT phải kiểm tra và confirm với tổ lái rằng toàn bộ khi vực bên ngoài cửa cockpit
clear trước khi yêu cầu vào buồng lái và trước khi rời khỏi buồng lái
* Cửa phải được đóng và khoá ngay khi thành viên tổ bay vào hoặc ra khỏi buồng
lái
* Để vào buồng lái, TVT sẽ gọi lên cockpit qua interphone, sau đó sẽ đọc password
đã được thống nhất từ trước mà PIC đã thông báo.
“This is …. (password). Please unlock the door”`, keywords: ["request", "normal", "access", "deck", "purser", "details", "State", "out", "correct", "phrase"], category: "An toàn – An ninh" },
  { id: 2, question: `(AT.2) 1. When a disabled passenger happens to seat in an exit row (flight is
totally full of booking), what shall the cabin crew do?
2. What kind of safety information must be included in the pre-flight
safety demonstration announcement to cabin passengers?`, answer: `CCOM 2.13.1.1 f) + PHM 2.1.15 + VAR 13.035
* Đổi chỗ hành khách này sang một ghế khác không phải ghế tại cửa thoát hiểm, sau
đó báo cáo TVT
* Trường hợp không còn chỗ ngồi xa cửa thoát hiểm, và nếu cần phải cung cấp chỗ
ngồi cho hành khách phải di chuyển khỏi chỗ ngồi tại hàng ghế ở lối thoát hiểm, TV
phải di chuyển một hành khách khác mà sẵn lòng và có khả năng đảm nhận nhiệm
vụ thoát hiểm, vào chỗ ngồi tại hàng ghế ở lối thoát hiểm`, keywords: ["disabled", "passenger", "happens", "seat", "exit", "row", "totally", "full", "booking", "kind"], category: "An toàn – An ninh" },
  { id: 3, question: `(AT.3) 1. What kinds of PEDs are permitted to be used during flight at and
above 10,000 feet? List out at least 3 items.
2. In which phase of flight the Portable Electronic Devices (PEDs) are
not allowed to be charged?
3. In which time the mobile phone can’t be used / can be used when pax
are on board?`, answer: `flights? CCOM 2.20.1
* Đồng hồ điện tử truyền thống, không bao gồm điện thoại di động hoặc bất kỳ thiết
bị thu/truyền nào có chức năng như đồng hồ điện tử.
* Máy ghi âm di động truyền thống, ngoại trừ điện thoại di động hoặc bất kỳ thiết bị
thu/truyền nào có chức năng như máy ghi âm di động.
* Máy trợ thính
* Máy hỗ trợ nhịp tim
* Máy cạo râu chạy bằng điện
Quy định PEDs:
- Tất cả PEDs phải chuyển sang chế độ FLIGHT MODE và SILENT MODE khi sử
dụng
- PEDs kích thước lớn (hoăc trọng lượng >1.3 kg) phải cất lên overhead hoặc dưới
gầm ghế (nếu < 1.3kg và nhỏ thì khách có thể cất gọn vào trong túi ghế phía trước
trong quá trình cất hạ cánh)
- Nếu nguồn điện từ 50-60Hz 110-220V hoặc USB được trang bị trên máy bay thì
được cắm sạc
→ Tất cả PEDs không được cắm sạc trong quá trình taxi, cất hạ cánh và hoạt động
bay dưới 10.000ft
** Pin sạc dự phòng - Power Bank (CCOM 2.20 & TBAT 358A)
- Cần được lấy ra khỏi HLXT và để nơi dễ quan sát như túi ghế phía trước hoặc bên
cạnh hành khách
- Không để trên overhead locker hoặc những nơi khó giám sát, khó phát hiện nếu
phát hiện khói/cháy từ pin
- Không được sạc từ cổng USB của máy bay; Không được dùng để sạc các thiết bị
điện tử khác trong suốt chuyến bay`, keywords: ["kinds", "PED", "permitted", "used", "during", "above", "feet", "List", "out", "least"], category: "An toàn – An ninh" },
  { id: 4, question: `(AT.4) Transportation of Deportee passengers on VNA flights:
1. Where shall Deportee passengers be allocated?
2. What is the handling procedure of Deportee passengers in the cabin
in details (when you receive the special information from ground staff)?`, answer: `CCOM 2.12.4
* Chỗ ngồi của khách bị trục xuất phải bố trí ở phía sau cabin, cách xa lối thoát hiểm;
* Hành khách bị trục xuất và người hộ tống phải lên trước và xuống sau những hành
khách khác;
* PIC phải được thông báo về người bị trục xuất thông qua mẫu “Thông tin đặc biệt
cho phi hành đoàn”
* Hành khách bị trục xuất và người hộ tống (nếu có) không được phục vụ các loại
đồ uống có cồn và các dụng cụ có thể dùng làm vũ khí gây nguy hiểm cho hành
khách khác.
* Tại điểm đến, TV bàn giao người bị trục xuất (trong trường hợp người bị trục xuất
không có người đi cùng) cùng với hộ chiếu và mẫu “Lệnh của người bị trục xuất”
cho đại diện`, keywords: ["Transportation", "Deportee", "passengers", "VNA", "flights", "Where", "allocated", "handling", "procedure", "details"], category: "An toàn – An ninh" },
  { id: 5, question: `(AT.5) a) How to perform the pre-flight check the life raft (extra raft) of A
321?
b) What is the capacity of life raft?
c) How to launch the life raft (extra raft) of A 321?
d) If we operate with the A 321- config 16/168, 4 cabin crew due to 01
cabin crew is sick in PQC.
The sector: PQC-SGN (This is the over water flight).
Can we operate with 4 cabin crew in this sector? Explain?`, answer: `CCOM 5.6.4
* Pre-flight check:
Kiểm tra đúng vị trí và số lượng
Đồng hồ áp suất ở vị trí “FULL” mode hoặc 3-3.5 mbar
* Capacity: 25 - 38 người
* Launching Ratf:
-Attach the retaining line to a metal section. A clip on the line provides quick
connection.
-Attach the retaining line to a metal section of the aircraft.
-Inflate by pulling firmly on the inflation handle, pulling from the end of the line,
followed by the second firm pull to ensure inflation of both chambers.
-Disconnect the retaining line or cut it with knife provided.

A/C Type
Long-range overwater Flights

Other Flights

B787

8

A350

8
8/195

6

5

16/162
16/168

5

4

A320

5

4

ATR 72

N/A

2

A321

____________________________________________________



AN TOÀN KHAI THÁC (FOM)`, keywords: ["perform", "pre", "check", "life", "raft", "extra", "capacity", "launch", "operate", "with"], category: "An toàn – An ninh" },
  { id: 6, question: `(AT.6) For Emergency Locator Transmitters KANNAD 406AS
1.How to perform the pre-flight check
2. How to operate in two cases (on land/water)?`, answer: `* Pre-flight check:
Kiểm tra số lượng và vị trí - Lấy ra khỏi giá đỡ - Công tắc ở vị trí ARM
* Operation:
On water: - Tháo dây buộc với móc treo - Nối móc treo với thuyền phao – Dựng
antenna thẳng đứng - Bật công tắc sang ON – Để ELT xuống nước
On land: Tìm vị trí không có obstruction (cây) - Chọn vị trí cao nhất để phát tín hiệu
- Bật công tắc sang ON - Đặt ELT thẳng đứng`, keywords: ["Emergency", "Locator", "Transmitters", "KANNAD", "AS", "perform", "pre", "check", "operate", "two"], category: "An toàn – An ninh" },
  { id: 7, question: `(AT.7) Upon hearing "Cabin crew, cabin system check”, what systems do
cabin crew have to check? (On B787/A321/A350/ATR72)`, answer: `cabin crew have to check? CCOM 3.5.3
* Cabin Interphone System


* Emergency Lighting System (không áp dụng B787)
* Passenger call system
* Lavatory system (hệ thống chữa cháy tự động – smoke detector – pax call)
→ Hệ thống chữa cháy tự động của B787: check indicator dots màu TRẮNG
* Water/waste system`, keywords: ["Upon", "hearing", "system", "check", "systems", "have", "B787", "A321", "A350", "ATR72"], category: "An toàn – An ninh" },
  { id: 8, question: `(AT.8) As the chief purser of the flight, state the steps of security check
procedure before boarding?`, answer: `cabin crew do? CCOM 3.6.2
* TV đến khu vực làm việc được phân công chờ khẩu lệnh của TVT đọc đối với
từng mục trong tờ “Danh mục kiểm tra an ninh tàu bay”
* TVT đọc từng mục theo thứ tự từ trên xuống dưới
* TV lắng nghe khẩu lệnh của TVT và thực hiện kiểm tra an ninh tại khu vực trách
nhiệm. TV sẽ “thumb-up” cho TVT biết sau khi kiểm tra xong từng mục (với tàu
A321/A320 thì TV thumb-up cho TVT - với tàu A350/B787 thì TV bên phải thumbup cho TV bên trái, sau đó TV bên trái thumb-up cho TVT)
* TVT sau khi đọc xong danh mục kiểm tra An ninh tàu bay, sẽ làm kiểm tra an ninh
tại khu vực trách nhiệm của mình
* Sau khi hoàn tất kiểm tra an ninh, TVT sẽ thông báo “Security check completed”
* TVT báo cho PIC “Captain, security check completed”
Trong quá trình kiểm tra an ninh, nếu phát hiện vật nghi vấn, TV sẽ:
* KHÔNG chạm, di chuyển vật nghi vấn
* KHÔNG đổ nước hoặc đặt vật khác lên vật nghi vấn
* KHÔNG sử dụng các thiết bị phát sóng gần vật nghi vấn
* KHÔNG tạo ra âm thanh, thay đổi nhiệt độ hoặc rung chấn
* Ghi nhớ đặc điểm và đánh dấu khu vực đó bằng găng tay hoặc cà vạt
* Báo ngay cho PIC và nhà chức trách sân bay để ứng phó kịp thời`, keywords: ["chief", "purser", "state", "steps", "security", "check", "procedure", "boarding", "CCOM", "TV"], category: "An toàn – An ninh" },
  { id: 9, question: `(AT.9) 1. When the boarding completed, what shall Purser do before closing
the aircraft door for departure?
2. State the correct phrases of the report to the CAPT before closing the
aircraft door. (Example: 200 pax).
3. During flight there is a pax asking for medicine due to fever..What
does the purser do?`, answer: `Quy trình thực hiện Disarm bao gồm 2 TV: Một TV đọc checklist và TV còn lại sẽ
tiến hành thực hiện các bước. Sau khi thực hiện Disarm cửa, TV sẽ thông báo cho
TVT qua Interphone
* TAKE THE SAFETY PIN FROM STOWAGE
* OPEN COVER
* DISARM SLIDE


* INSTALL THE SAFETY PIN
* CLOSE COVER
* DISARM PROCEDURE COMPLETED`, keywords: ["boarding", "completed", "Purser", "closing", "aircraft", "door", "departure", "State", "correct", "phrases"], category: "An toàn – An ninh" },
  { id: 10, question: `(AT.10) A350 - Upon hearing the command “Cabin crew, disarm all slides and
cross-check”, what shall cabin crew do in details?`, answer: `Quy trình thực hiện Disarm bao gồm 2 TV: Một TV đọc checklist và TV còn lại sẽ
tiến hành thực hiện các bước. Sau khi thực hiện Disarm cửa, TV sẽ thông báo cho
TVT qua Interphone
* TAKE THE SAFETY PIN FROM STOWAGE
* OPEN COVER
* DISARM SLIDE


* INSTALL THE SAFETY PIN
* CLOSE COVER
* DISARM PROCEDURE COMPLETED`, keywords: ["A350", "Upon", "hearing", "command", "disarm", "all", "slides", "cross", "check", "details"], category: "An toàn – An ninh" },
  { id: 11, question: `(AT.11) A321 Upon hearing the command “Cabin crew, disarm all slides and
cross-check”, what should cabin crew do in details?`, answer: `Quy trình thực hiện Disarm bao gồm 2 TV: Một TV đọc check list và TV còn lại sẽ
tiến hành thực hiện các bước. Sau khi thực hiện Disarm cửa, TV sẽ thông báo cho
TVT qua Interphone
* PULL ARMING LEVER
* INSTALL SAFETY PIN
* CHECK INDICATOR GREEN
* DISARM PROCEDURE COMPLETED`, keywords: ["A321", "Upon", "hearing", "command", "disarm", "all", "slides", "cross", "check", "should"], category: "An toàn – An ninh" },
  { id: 12, question: `(AT.12) Upon hearing the command "Cabin crew, check cabin and galleys for
takeoff/ landing”, what shall cabin crew check in details?`, answer: `take off/ landing”, what shall cabin crew check? CCOM 3.11.1.2
CHECK CABIN & HÀNH KHÁCH:
* Hành khách cài dây an toàn, dựng thẳng lưng ghế, gấp bàn ăn, mở tấm che cửa
sổ, hạ tay ghế và đóng chỗ để chân.
* Hành khách phải tuân thủ các quy định về việc sử dụng PEDs
* Infant phải ngồi ở hàng ghế có đủ mặt nạ
* Infant được cài dây an toàn dành riêng và được cài đúng cách. Nôi được lắp
sau khi cất cánh & FSB OFF và thu lại trước khi máy bay bắt đầu giảm độ cao



để hạ cánh.
* Hành lý xách tay của khách phải được để trong ngăn đựng hành lý phía trên
hoặc để gọn hoàn toàn dưới gầm ghế phía trước.
* Màn hình giải trí trong khoang khách phải được đóng lại
* Các lối thoát hiểm không được có vật cản
* Rèm phải được đóng và secure gọn
* Dây an toàn tại các ghế không sử dụng phải được secure và không gây ảnh
hưởng đến lối thoát hiểm
* Toilet không có người và được khóa lại
* Trong quá trình cất hạ cánh vào ban đêm, đèn phải được giảm sáng ở mức
thấp nhất để đảm bảo tâm nhìn trong bóng tối của hành khách và TV.
CHECK GALLEY:
* Tất cả xe đẩy để đúng vị trí, đạp phanh, cài chốt khoá lại
* Xe đẩy không được sử dụng cần được xếp gọn và gắn tag để nhận diện và thay
thế
* Xếp gọn xe đẩy khi không sử dụng trong suốt chuyến bay
* Các thiết bị bếp rời (containers, hộc chứa, …) cần được secure vào đúng vị trí
* Tủ, máy pha cà phê được secure.`, keywords: ["Upon", "hearing", "command", "check", "galleys", "takeoff", "landing", "details", "take", "off"], category: "An toàn – An ninh" },
  { id: 13, question: `(AT.13) 1. State the cabin door opening procedure for international flights
[cabin door opened by cabin crew]? [FOR A321/A350]
2. Which skills should be used during opening the aircraft door?
3. What must crew member check the boarding bridge or stairway
before disembarking passengers?`, answer: `GIÁO TRÌNH ANHK BAN ĐẦU TVHK 6.2.1
* Trước khi tiếp nhận hành khách, hành lý, hàng hóa, bưu gửi, đồ phục vụ lên tàu
bay và sau khi hành khách, hành lý, hàng hóa, bưu gửi xuống hết khỏi tàu bay.
* Khi có hành khách bỏ chuyến tại điểm khởi hành
* Khi khách rời khỏi tàu bay tại điểm quá cảnh, nối chuyến, tạm dừng.`, keywords: ["State", "door", "opening", "procedure", "international", "flights", "opened", "A321", "A350", "Which"], category: "An toàn – An ninh" },
  { id: 14, question: `(AT.14) 1. State the cabin door opening procedure for international flights
[cabin door opened by cabin crew]? [FOR B787]
2. Which skills should be used during opening the aircraft door?
3. What must crew member check the boarding bridge or stairway
before disembarking passengers?`, answer: `Quy trình thực hiện Disarm bao gồm 2 TV: Một TV đọc check list và TV còn lại sẽ
tiến hành thực hiện các bước. Sau khi thực hiện Disarm cửa, TV sẽ thông báo cho
TVT qua Interphone
* OPEN COVER
* DISARM SLIDE
* CHECK INDICATOR ILLUMINATED
* CLOSE COVER
* DISARM PROCEDURE COMPLETED`, keywords: ["State", "door", "opening", "procedure", "international", "flights", "opened", "B787", "Which", "skills"], category: "An toàn – An ninh" },
  { id: 15, question: `(AT.15) Theo quyđịnh, Tổ TV phải thực hiện kiểm tra an ninh tàu bayvào những
thời điểm nào, trong tình huống bất thường/khai thác nào?`, answer: `GIÁO TRÌNH ANHK BAN ĐẦU TVHK 6.2.1
* Trước khi tiếp nhận hành khách, hành lý, hàng hóa, bưu gửi, đồ phục vụ lên tàu
bay và sau khi hành khách, hành lý, hàng hóa, bưu gửi xuống hết khỏi tàu bay.
* Khi có hành khách bỏ chuyến tại điểm khởi hành
* Khi khách rời khỏi tàu bay tại điểm quá cảnh, nối chuyến, tạm dừng.`, keywords: ["quyđịnh", "TV", "thực", "hiện", "kiểm", "tra", "ninh", "tàu", "bayvào", "điểm"], category: "An toàn – An ninh" },
  { id: 16, question: `(AT.16) 1.Những đối tượng nào là hành khách tiềm ẩn uy hiếp an ninh hàng
không?
2.Khi nào tổ tiếp viên được khống chế hành khách gây rối?
3. Sau khi khống chế khách gây rối, tổ bay quản lý khách gây rối như
thế nào?`, answer: `* Người bị tâm thần.
* Người bị từ chối nhập cảnh không tự nguyện về nước
* Người bị dẫn độ, bị can, phạm nhân.

GIÁO TRÌNH ANHK BAN ĐẦU TVHK 7.6.1
Hành khách gây rối – là hành khách cố ý không chấp hành quy định về An toàn, An
ninh hàng không, trật tự công cộng tại cảng hàng không, sân bay, trên tàu bay hoặc
có hành vi tung tin, cung cấp thông tin sai uy hiếp an toàn hàng không
(theo chương trình ANHK – VNA ban hành lần 6)
4 MỨC ĐỘ HÀNH KHÁCH GÂY RỐI:
* Mức độ 1: Xử sự không đúng mực dưới dạng nghi ngờ hoặc có thái độ đe dọa
* Mức độ 2: Hành vi sỉ nhục hoặc tấn công
* Mức độ 3: Hành vi đe dọa tính mạng
* Mức độ 4: Mưu toan hoặc thật sự cố gắng vi phạm kỷ luật hoặc xâm phạm buồng
lái
CÁCH XỬ LÝ:
* Nhắc nhở nhằm chấm dứt hành vi gây rối, giám sát chặt chẽ đối tượng
* Một thành viên tổ bay trực tiếp tiếp xúc với hành khách để kiềm chế các hành vi
gây rối
* Khi hành vi gây rối có chiều hướng gia tăng, TV báo cáo cơ trưởng hoặc TVT
nhanh nhất, TVT báo ngay cho tổ lái bằng mật khẩu an ninh: “This is … please
unlock the door”
* Khi cần thiết, TV trực tiếp cảnh cáo với khách: “Tôi, tiếp viên yêu cầu hành khách
ngừng hành vi…, nếu không tôi sẽ báo cáo TVT và cơ trưởng sẽ có biện pháp cứng
rắng hơn.”
* Nếu khách ngồi gần cửa thoát hiểm hoặc lối đi, TV cần chuyển chỗ ra xa và ngồi
sát cửa sổ.
* Khi hành vi gây rối tiếp tục leo thang có nguy cơ uy hiếp đến tính mạng hành
khách khác hoặc an toàn của máy bay, Cơ trưởng phải trực tiếp cảnh cáo hành khách
thông qua PA
* TV không phục vụ đồ uống có cồn, dao muỗng nĩa bằng kim loại
* TV chọn người trợ giúp (công an, bộ đội,…) để hỗ trợ khống chế hành khách
* TV có thể khóa tay, sử dụng công cụ khác để khống chế khách gây rối khi khách
có hành vi đe dọa tính mạng hành khách khác và phi hành đoàn.
* TV có thể bắt giữ hành khách gây rối nếu đe dọa đến an toàn của máy bay


* Cơ trưởng phải báo cho nhà chức trách sân bay đến để yêu cầu các lực lượng hỗ
trợ an ninh sân bay, công an, cứu thương (nếu cần)
* Tổ lái không được mở cửa buồng lái trong mọi người hợp
* PIC hoăc thành viên tổ bay lập Biên bản VPHC trong lĩnh vực HKDD để bàn giao
khách gây rối và Biên bản cho nhà chức trách tại sân bay đến sau khi máy bay hạ
cánh`, keywords: ["đối", "tượng", "tiềm", "hiếp", "ninh", "hàng", "khống", "chế", "gây", "rối"], category: "An toàn – An ninh" },
  { id: 17, question: `(AT.17) 1.What is definition of dangerous goods?
2. How many classes are there in dangerous goods?
3. List out 5 typical classes of DGs.
4. If the the power bank gets fire on board, what shall cabin crew deal
with the situation?`, answer: `incident/accident on board? In case of fire, and in case of spillage or leakage
CCOM 8.2.1
Trường hợp có lửa → quy trình chữa cháy 3 người (CabinCrew Fire Drill)
Trường hợp đổ chất lỏng dễ bay hơi/ dễ cháy:
- Báo PIC tắt các nguồn điện trong galley
- Khoá cửa cockpit
- Tổ bay sẽ xem xét việc hạ giảm độ cao máy bay đồng thời tăng độ cao của cabin
(cabin attitude) để thiết lập hệ thống thông gió tối đa nhằm xua tan khói
- Chuẩn bị bình Halon để sử dụng
** Nếu gặp phải thùng chứa chất nguy hiểm có thể bị rò rỉ hoặc đổ tràn, TV nên tìm
cách giảm thiểu tác động của sự cố tràn và bảo vệ khu vực xung quanh khỏi bị hư
hại thêm.
** Nếu không có bộ DGR Kit, TV lấy túi rác nhựa lớn, khăn giấy, găng tay chống
nóng hoặc găng tay chịu nhiệt và tiến hành như sau:
- Bảo vệ tay bằng cách đeo găng tay chống nóng hoặc găng tay chịu nhiệt và phải
được bọc bằng túi nhựa nhỏ bên ngoài
- Nếu có khói, TV đội smokehood và chuẩn bị sẵn bình Halon, đồng thời di chuyển
hành khách ra khỏi khu vực, phát khăn ướt nếu cần thiết
- Đặt vật bị rò rỉ vào trong một túi nhựa lớn, giữ ở vị trí để tránh rò rỉ thêm và chú ý
không làm đổ đồ bên ngoài túi
- Lau sạch mọi vết đổ bằng khăn giấy và đặt vào trong một túi nhựa khác;
- Đặt túi này vào trong túi thứ hai, tháo găng tay/vỏ bọc nhựa và đặt vào bên trong
túi thứ hai, cẩn thận để tránh tiếp xúc với da khi tháo găng tay
- Dùng một đôi găng tay nhựa mới, đóng túi thứ nhất, loại bỏ không khí thừa rồi
đóng túi thứ hai;



- Đặt đồ đã đóng gói vào thùng rác nhà vệ sinh phía sau và khóa cửa nhà vệ sinh;
- Bất kỳ đệm, lưng ghế, v.v. nào bị bẩn phải được loại bỏ, cho vào túi nhựa và cất
vào nhà vệ sinh cùng với hàng hóa nguy hiểm;
- Che phủ chỗ đổ tràn trên thảm/sàn nhà
- Thông báo cho PIC về các bước đã thực hiện và kết quả

List out at least 2 Dangerous goods in operator's property? 9 CLASSES OF
DGR (Tài liệu training DGR 5.3.1)
Hàng nguy hiểm: là vật phẩm hoặc vật chất có thể gây rủi ro đối với sức khỏe,
an toàn, tài sản của con người hoặc môi trường, được nêu tại danh mục hàng nguy
hiểm trong quy định về hàng hóa nguy hiểm của IATA hoặc được phân loại theo
quy định.
* Nhãn nguy hiểm:
- Cảnh báo mối nguy hiểm liên quan hàng hoá bên trong kiện hàng
- Mỗi loại/nhóm chỉ có 1 nhãn nhận dạng duy nhất, dán bên ngoài kiện hàng
- Phải phù hợp với chi tiết kỹ thuật (size, hình dạng, màu sắc, ký hiệu, số
loại/nhóm), và các nhãn có thể có chữ để thể hiện tính chất nguy hiểm
- Nhãn có hình vuông xoay 1 góc 45 độ, minimum size 100x100 mm
- Đúng mẫu quy định tại TI (technical instruction) và DGR
* Nhãn phục vụ:
Một số hàng nguy hiểm yêu cầu có nhãn phục vụ đặc biệt bên cạnh nhãn nguy
hiểm vì chúng cần được phục vụ hoặc chất xếp
→ Dangerous goods in operator's property: Đá khô, bình oxy, bình halon
9 LOẠI HÀNG NGUY HIỂM
LOẠI 1 – CHẤT NỔ (Explosives)
* Nhóm 1.1: Vật phẩm hoặc chất có tính nguy hiểm nổ lớn
* Nhóm 1.2: Vật phẩm hoặc chất có tính nguy hiểm nổ văng mảnh
* Nhóm 1.3: Vật phẩm hoặc chất có tính nguy hiểm nổ nhỏ hoặc văng mảnh
* Nhóm 1.4: Vật phẩm hoặc chất có tính nguy hiểm nổ không đáng kể
* Nhóm 1.5: Vật phẩm hoặc chất kém nhạy có tính nguy hiểm nổ lớn
* Nhóm 1.6: Vật phẩm hoặc chất rất kém nhạy và không có tính nguy hiểm nổ lớn



LOẠI 2 – CHẤT KHÍ (Gases)
* Nhóm 2.1: Chất khí dễ cháy
* Nhóm 2.2: Chất khí không cháy không độc
* Nhóm 2.3: Khí độc
LOẠI 3 – CHẤT LỎNG DỄ CHÁY (Flammable Liquids)
LOẠI 4 – CHẤT RẮN DỄ CHÁY (Flammable Solids)
* Nhóm 4.1: Chất rắn dễ cháy
* Nhóm 4.2: Chất có thể tự bốc cháy
* Nhóm 4.3: Chất nguy hiểm khi gặp nước
LOẠI 5 – CHẤT OXY HOÁ & PEROXIDE HỮU CƠ (Oxidizing Substances
& Organic Peroxides)
* Nhóm 5.1: Chất oxy hoá
* Nhóm 5.2: Peroxide hữu cơ
LOẠI 6 – CHẤT ĐỘC & CHẤT LÂY NHIỂM (Toxic, Infectious Substances)
* Nhóm 6.1: Chất độc
* Nhóm 6.2: Chất lây nhiễm
LOẠI 7 – CHẤT PHÓNG XẠ (Radioactive Materials)
LOẠI 8 – CHẤT ĂN MÒN (Corrossive)
LOẠI 9 – CÁC LOẠI HÀNG NGUY HIỂM KHÁC (Micellaneous Dangerous
Goods)`, keywords: ["definition", "dangerous", "goods", "many", "classes", "there", "List", "out", "typical", "DG"], category: "An toàn – An ninh" },
  { id: 18, question: `(AT.18) 1. As the dangerous goods regulation, how many types of label of
dangerous goods are there and state the name of each label?`, answer: `List out at least 2 Dangerous goods in operator's property? 9 CLASSES OF
DGR (Tài liệu training DGR 5.3.1)
Hàng nguy hiểm: là vật phẩm hoặc vật chất có thể gây rủi ro đối với sức khỏe,
an toàn, tài sản của con người hoặc môi trường, được nêu tại danh mục hàng nguy
hiểm trong quy định về hàng hóa nguy hiểm của IATA hoặc được phân loại theo
quy định.
* Nhãn nguy hiểm:
- Cảnh báo mối nguy hiểm liên quan hàng hoá bên trong kiện hàng
- Mỗi loại/nhóm chỉ có 1 nhãn nhận dạng duy nhất, dán bên ngoài kiện hàng
- Phải phù hợp với chi tiết kỹ thuật (size, hình dạng, màu sắc, ký hiệu, số
loại/nhóm), và các nhãn có thể có chữ để thể hiện tính chất nguy hiểm
- Nhãn có hình vuông xoay 1 góc 45 độ, minimum size 100x100 mm
- Đúng mẫu quy định tại TI (technical instruction) và DGR
* Nhãn phục vụ:
Một số hàng nguy hiểm yêu cầu có nhãn phục vụ đặc biệt bên cạnh nhãn nguy
hiểm vì chúng cần được phục vụ hoặc chất xếp
→ Dangerous goods in operator's property: Đá khô, bình oxy, bình halon
9 LOẠI HÀNG NGUY HIỂM
LOẠI 1 – CHẤT NỔ (Explosives)
* Nhóm 1.1: Vật phẩm hoặc chất có tính nguy hiểm nổ lớn
* Nhóm 1.2: Vật phẩm hoặc chất có tính nguy hiểm nổ văng mảnh
* Nhóm 1.3: Vật phẩm hoặc chất có tính nguy hiểm nổ nhỏ hoặc văng mảnh
* Nhóm 1.4: Vật phẩm hoặc chất có tính nguy hiểm nổ không đáng kể
* Nhóm 1.5: Vật phẩm hoặc chất kém nhạy có tính nguy hiểm nổ lớn
* Nhóm 1.6: Vật phẩm hoặc chất rất kém nhạy và không có tính nguy hiểm nổ lớn



LOẠI 2 – CHẤT KHÍ (Gases)
* Nhóm 2.1: Chất khí dễ cháy
* Nhóm 2.2: Chất khí không cháy không độc
* Nhóm 2.3: Khí độc
LOẠI 3 – CHẤT LỎNG DỄ CHÁY (Flammable Liquids)
LOẠI 4 – CHẤT RẮN DỄ CHÁY (Flammable Solids)
* Nhóm 4.1: Chất rắn dễ cháy
* Nhóm 4.2: Chất có thể tự bốc cháy
* Nhóm 4.3: Chất nguy hiểm khi gặp nước
LOẠI 5 – CHẤT OXY HOÁ & PEROXIDE HỮU CƠ (Oxidizing Substances
& Organic Peroxides)
* Nhóm 5.1: Chất oxy hoá
* Nhóm 5.2: Peroxide hữu cơ
LOẠI 6 – CHẤT ĐỘC & CHẤT LÂY NHIỂM (Toxic, Infectious Substances)
* Nhóm 6.1: Chất độc
* Nhóm 6.2: Chất lây nhiễm
LOẠI 7 – CHẤT PHÓNG XẠ (Radioactive Materials)
LOẠI 8 – CHẤT ĂN MÒN (Corrossive)
LOẠI 9 – CÁC LOẠI HÀNG NGUY HIỂM KHÁC (Micellaneous Dangerous
Goods)`, keywords: ["dangerous", "goods", "regulation", "many", "types", "label", "there", "state", "name", "each"], category: "An toàn – An ninh" },
  { id: 19, question: `(AT.19) State the refueling procedure when passengers remain on board based
on safety notice 100 / date effected 14/2/2026.`, answer: `(CCOM 3.20)
* Tất cả các thành viên phi hành đoàn, hành khách, nhân viên cần được thông báo
về quá trình nạp dầu sẽ được diễn ra và hoàn tất. Số lượng TV còn lại trên tàu sẽ
bằng số cửa thoát hiểm chính. Các TV này sẽ đứng tại khu vực cửa phụ trách trong
khi quá trình nạp dầu diễn ra. Ít nhất có 1 TV đủ tiêu chuẩn và được đào tạo về quy
trình thoát hiểm khẩn cấp.
* TVT sẽ đọc phát thanh để thông báo về thời điểm bắt đầu và kết thúc quá trình nạp
dầu. Hành khách phải được hướng dẫn tháo dây an toàn, không hút thuốc, không sử
dụng các vật liệu có thể gây ra cháy nổ và tắt các thiết bị điện tử.
* Ngoài ra:
- Tín hiệu: FSB OFF - NO SMOKING ON - EXIT SIGN ON
- Hành khách: cần được hướng dẫn tháo dây an toàn, không hút thuốc, tắt các thiết
bị điện tử
- Lối thoát hiểm trên máy bay cần thông thoáng không có vật cản
- Lối thoát hiểm dưới mặt đất cần thông thoáng không có vật cản
- Cửa phía trước mở và được gắn với ống lồng hoặc thang
- Cửa 4R ở chế độ ARMED cho đến khi hoàn tất nạp dầu
- Các cửa khác để ở chế độ DISARMED và sẽ được ARMED trong trường hợp thoát
hiểm khẩn cấp
- Dịch vụ mặt đất: vệ sinh, cung ứng kết thúc trước khi quá trình nạp dầu khi có hành
khách trên tàu diễn ra
- Khi phát hiện có dấu hiệu cháy, khói => phải dừng ngay quá trình nạp dầu.



* Thông tin liên lạc 2 chiều sẽ được thiết lập thông qua hệ thống liên lạc nội bộ của
tàu bay giữa nhân viên giám sát mặt đất và các cá nhân được qualified trên tàu.
* Note: TV phải luôn cảnh giác trong quá trình nạp dầu. Nếu phát hiện bất thường
hoặc tình huống khẩn cấp cần báo ngay tổ lái bằng nút EMER hoặc ** (B787) trên
Interphone`, keywords: ["State", "refueling", "procedure", "passengers", "remain", "board", "based", "safety", "notice", "date"], category: "An toàn – An ninh" },
  { id: 20, question: `(AT.20) State the fire -fighting procedure for lithium battery fire.`, answer: `Trường hợp: PED overheat (quá nóng) và không có khói/lửa
* Xác định PED (nguyên nhân gây overheat, mùi khét và hỏi khách trong khu vực)
* Hướng dẫn hành khách tắt PED ngay lập tức
* Ngắt nguồn điện (power)
- Tháo thiết bị ra khỏi nguồn (power supply) (nếu an toàn)
- Tắt nguồn điện tại ghế
- Đảm bảo nguồn điện & thiết bị phải được tắt trong suốt quá trình bay còn lại (không
có gắng tháo pin ra khỏi thiết bị)
* Hướng dẫn khách để thiết bị ở vị trí dễ quan sát
* Nếu có khói/lửa → xử lý theo trường hợp PED có khói/cháy
* Sau khi đáp, TVT ghi các báo cáo liên quan
Trường hợp: PED bị rớt/kẹt dưới ghế hạng C (tàu A350/B787)
* Thông báo cho PIC và các thành viên khác trong tổ
* Lấy thông tin từ khách
* Sử dụng thiết bị bảo vệ (găng tay chống nóng) để lấy PED (đổi chỗ khách nếu còn
ghế trống, không điều khiển các chức năng của ghế và không di chuyển ghế trong
quá trình lấy PED)
* Nếu có khói/lửa → xử lý theo trường hợp PED có khói/cháy
* Sau khi đáp, thông báo cho thợ máy nơi PED bị rớt/kẹt để hỗ trợ tìm kiếm và TVT
ghi các báo cáo liên quan
Trường hợp: Pin/PED có khói/cháy


* Xác định nguồn cháy (để đảm bảo an toàn, không nên mở hành lý có chứa Pin/PED
đang cháy/khói)
* Áp dụng quy trình chữa cháy Cabin Crew Fire Drill
* Ngắt nguồn điện (power)
- Tháo thiết bị ra khỏi nguồn (power supply) (nếu an toàn)
- Tắt nguồn điện tại ghế
- Đảm bảo nguồn điện & thiết bị phải được tắt trong suốt quá trình bay còn lại (không
có gắng tháo pin ra khỏi thiết bị)
* Nhúng chìm Pin/PED vào nước / chất lỏng không bắt lửa
* Giám sát thường xuyên để tránh Pin/PED bắt lửa lại
* Khi Pin/PED được làm mát (sau khoảng 10-15 phút) → TV lấy container, đổ đầy
nước vào trong, lấy găng tay chống nóng và đặt Pin/PED vào trong container đã
ngập nước, secure container để tránh bị tràn chất lỏng ra ngoài
* Giám sát thiết bị và khu vực xung quanh trong khoảng thời gian còn lại
* Sau khi hạ cánh → thông báo cho thợ máy nơi để Pin/PED và những thông tin cần
thiết, TVT ghi các báo cáo liên quan
Trường hợp: Pin/PED có khói/cháy trên overhead
* Áp dụng quy trình chữa cháy Cabin Crew Fire Drill
* Nếu tìm / tiếp cận được thiết bị → chữa cháy và làm các bước tiếp theo
* Nếu khói từ overhead và chưa tìm / tiếp cận được thiết bị → di dời các hành lý
khác và tiếp cận gần với hành lý có chứa Pin/PED đang cháy
* Xác định Pin/PED đang cháy/khói (để đảm bảo an toàn, không nên mở hành lý có
chứa Pin/PED đang cháy/khói)
* Nhúng chìm Pin/PED vào nước / chất lỏng không bắt lửa
* Khi Pin/PED được làm mát (sau khoảng 10-15 phút) → TV lấy container, đổ đầy
nước vào trong, lấy găng tay chống nóng và đặt Pin/PED vào trong container đã
ngập nước, secure container để tránh bị tràn chất lỏng ra ngoài
* Giám sát thiết bị và khu vực xung quanh trong khoảng thời gian còn lại
* Sau khi hạ cánh → thông báo cho thợ máy nơi để Pin/PED và những thông tin cần
thiết, TVT ghi các báo cáo liên quan`, keywords: ["State", "fire", "fighting", "procedure", "lithium", "battery", "Trường", "hợp", "PED", "overheat"], category: "An toàn – An ninh" },
  { id: 21, question: `(AT.21) 1. State the pre-flight check of Portable Oxygen Bottle (POB) of B787.
2. State the differences for the pre-flight check of adult's lifevest and
spare lifevest / lifevest for infant?`, answer: `bottle Tranning Edoc 3.1.2.1 vs CCOM 5.2.3
* Pre-flight check:
Số lượng và vị trí - Lấy bình ra khỏi giá đỡ - Van ON/OFF ở vị trí OFF - Đồng hồ
áp suất chỉ 1500-1850 PSI - Mặt nạ gắn với bình oxy - Đặt lại vị trí ban đầu và tránh
cài chốt lên ống dẫn oxy
* Operation: Lấy mặt nạ ra khỏi túi - Vặn van sang vị trí ON (Đèn LED sẽ sáng) Đặt mặt nạ lên mũi và miệng
* Duration: 180 phút và ở chế độ 4 lít`, keywords: ["State", "pre", "check", "Portable", "Oxygen", "Bottle", "POB", "B787.", "differences", "adult"], category: "An toàn – An ninh" },
  { id: 22, question: `(AT.22) State the pre-flight check of Smoke Hood (Scott PBE) of A321 Neo`, answer: `PBE? CCOM 5.4.4
* Pre-flight check:
Số lượng và vị trí - Lấy hộp ra khỏi gía đỡ - Kiểm tra còn seal – Indicator màu
VÀNG - Hộp không bị tác động - Đặt lại vị trí ban đầu
* Operation:
Mở hộp và lấy mặt nạ ra khỏi túi bạc – Đội smoke hood lên đầu đảm bảo túi thở ở
phía trước ngực - Đảm bảo vòng đệm cổ (neck seal) không có vật cản (tóc, cổ áo …)
và dây đai đầu (head harness) được kéo xuống hết - Đặt mặt nạ sát với mũi và miệng
& kéo sợi dây đen để kích hoạt oxy - Thắt dây đeo quanh eo
* Duration: 20 phút`, keywords: ["State", "pre", "check", "Smoke", "Hood", "Scott", "PBE", "A321", "Neo", "CCOM"], category: "An toàn – An ninh" },
  { id: 23, question: `(AT.23) What kinds of safety information must be provided to special assist
passengers (blind pax, deaf pax, handicapped pax) during personal
safety briefing before take-off?`, answer: `CCOM 2.13.1.1 f) + PHM 2.1.15 + VAR 13.035
* Đổi chỗ hành khách này sang một ghế khác không phải ghế tại cửa thoát hiểm, sau
đó báo cáo TVT
* Trường hợp không còn chỗ ngồi xa cửa thoát hiểm, và nếu cần phải cung cấp chỗ
ngồi cho hành khách phải di chuyển khỏi chỗ ngồi tại hàng ghế ở lối thoát hiểm, TV
phải di chuyển một hành khách khác mà sẵn lòng và có khả năng đảm nhận nhiệm
vụ thoát hiểm, vào chỗ ngồi tại hàng ghế ở lối thoát hiểm`, keywords: ["kinds", "safety", "information", "provided", "special", "assist", "passengers", "blind", "pax", "deaf"], category: "An toàn – An ninh" },
  { id: 24, question: `(AT.24) In which cases shall the aircraft safety equipment and cabin system
check be conducted by the cabin crew?
Who can conduct the preflight safety equipment and system check in
the cabin?`, answer: `A/C Type
Long-range overwater Flights

Other Flights

B787

8

A350

8
8/195

6

5

16/162
16/168

5

4

A320

5

4

ATR 72

N/A

2

A321

____________________________________________________



AN TOÀN KHAI THÁC (FOM)`, keywords: ["which", "cases", "aircraft", "safety", "equipment", "system", "check", "conducted", "can", "conduct"], category: "An toàn – An ninh" },
  { id: 25, question: `(KT1) Thời gian bay được tính như thế nào?
Tiếp viên Nguyễn Văn A bay SGN-CXR-SGN, giờ khởi hành tại SGN
là 10:50, giờ đóng chèn tại CXR lúc 12:00, sau đó baychuyển sân CXR-
SGN bằng vé từ 15:00 - 16:10, thời gian bay được tính từ thời điểm nào
đến thời điểm nào?`, answer: `→ Flight Time: là tổng thời gian được tính từ khi máy bay bắt đầu chuyển động khỏi
nơi đỗ để cất cánh cho đến khi dừng lại tại điểm kết thúc chuyến bay và các động cơ
đều tắt.
** Maximum FT: 100h/28 ngày liên tiếp và 1000h/12 tháng liên tiếp
** Flight Time tối đa được tính dựa trên 2 yếu tố: Giờ có mặt nhận nhiệm vụ và số
lần cất hạ cánh



VD: Tiếp viên Nguyễn Văn A bay SGN-CXR-SGN khởi hành tại SGN 10:50, đến
CXR lúc 12h00, sau đó bay chuyển sân CXR-SGN bằng vé từ 15:00 - 16:10, thời
gian bay được tính từ thời điểm nào đến thời điểm nào?
→ Thời gian bay được tính từ 10:50 – 12:00`, keywords: ["bay", "tính", "thế", "Nguyễn", "Văn", "SGN", "CXR", "giờ", "khởi", "đóng"], category: "Khai thác (FOM)" },
  { id: 26, question: `(KT2) Hãygiải thích vắn tắt thời gian làmnhiệmvụ bayđược tính như thế nào?
Nếu TV được chuyển sân ngay trước chuyến bay làm nhiệm vụ thì thời
gian làm nhiệm vụ bay được tính như thế nào?`, answer: `→ Flight Duty Period: là tổng thời gian từ khi một thành viên tổ bay có mặt nhận
nhiệm vụ bay cho đến khi hoàn thành chuyến bay cuối mà người đó là thành viên
làm việc trên chuyến bay đó (FDP = 1h trước EDT + 15 phút sau khi máy bay đóng
chèn)
→ FDP bao gồm những khoảng thời gian nào:
• Thời gian bay (Flight Time)
• Trước chuyến bay (1 giờ trước EDT) và sau chuyến bay (15 phút sau khi máy
bay đóng chèn)
• Thời gian transit nếu không được cung cấp chỗ nghỉ phù hợp
• Thời gian di chuyển deadhead trước chuyến bay làm nhiệm vụ (FDP sẽ được
tính từ lúc bắt đầu chuyến bay deadhead)
• Trực dự bị nếu nếu không được cung cấp chỗ nghỉ phù hợp
Tổng thời gian làm nhiệm vụ bay ngắn hơn thời gian làm nhiệm vụ
FLIGHT TIME < FLIGHT DUTY PERIOD < DUTY PERIOD`, keywords: ["Hãygiải", "thích", "vắn", "tắt", "làmnhiệmvụ", "bayđược", "tính", "thế", "TV", "chuyển"], category: "Khai thác (FOM)" },
  { id: 27, question: `(KT3) Khái niệm thời gian dự bị được hiểu như thế nào, có mấy loại trực dự
bị?
Cho biết cách tính thời gian làm nhiệm vụ của các loại trực dự bị?`, answer: `* Di chuyển deadhead không được tính là 1 sector
* Thời gian di chuyển deadhead được tính là Duty Period (DP)
* Di chuyển deadhead sau khi reporting và trước khi operating được xem là FDP`, keywords: ["Khái", "niệm", "hiểu", "thế", "mấy", "loại", "trực", "cách", "tính", "làm"], category: "Khai thác (FOM)" },
  { id: 28, question: `(KT4) Theo quy định, khoảng thời gian làm nhiệm vụ cộng dồn của thành viên
tổ bay không được vượt quá các giới hạn nào (7 ngày, 14 ngày, 28 ngày
liên tục bất kỳ)?`, answer: `→ Tổng thời gian bay không được vượt quá 100 giờ trong 28 ngày liên tục`, keywords: ["quy", "định", "khoảng", "làm", "cộng", "dồn", "thành", "bay", "vượt", "quá"], category: "Khai thác (FOM)" },
  { id: 29, question: `(KT5) Thời gian bay tối đa theo giới hạn 12 tháng liên tục bất kỳ, giới hạn 28
ngày liên tục bất kỳ, của từng thành viên tổ bay làm nhiệm vụ trên
chuyến bay như thế nào?
Tiếp viên Nguyễn Văn A bay SGN-CXR bằng tàu A321 khởi hành
09:00, đến CXR 10:10, sau đó chuyển sân CXR-SGN bằng vé FOC về
tại SGN lúc 13:00, thời gian làm nhiệm vụ bay tính như thế nào?`, answer: `→ Tổng thời gian bay không được vượt quá 100 giờ trong 28 ngày liên tục

tại SGN 12:30 sau đó bay tiếp SGN-DAD 14:00 đáp tại DAD 15:00, 19:00 chuyển
sân về FOC đáp tại SGN lúc 20:00, thời gian nghỉ phục hồi theo quy định là bao lâu?
→ TV cần nghỉ 12h`, keywords: ["bay", "tối", "giới", "hạn", "tháng", "liên", "tục", "bất", "ngày", "từng"], category: "Khai thác (FOM)" },
  { id: 30, question: `(KT6) Khái niệm “Thời gian làm nhiệm vụ bay” được hiểu như thế nào?
Thời gian có mặt làm nhiệm vụ bay (giờ địa phương-trong trạng thái
thích nghi) là từ 15h30-15h59, với số lần cất hạ cánh là 4, thì khoảng
thời gian làm nhiệm vụ bay của tổ tiếp viên được giới hạn là bao nhiêu?`, answer: `thái thích nghi) từ 14:00 – 14:29, với số lần cất hạ cánh 4, thì khoảng thời gian làm
nhiệm vụ bay của tổ tiếp viên được giới hạn?
→ 11:30`, keywords: ["Khái", "niệm", "làm", "bay", "hiểu", "thế", "mặt", "giờ", "địa", "phương"], category: "Khai thác (FOM)" },
  { id: 31, question: `(KT7) Khái niệm “Thời gian làm nhiệm vụ bay” được hiểu như thế nào?
Thời gian có mặt làm nhiệm vụ bay (giờ địa phương-trong trạng thái
thích nghi) là từ 06h00-13h29, với số lần cất hạ cánh là 1 hoặc 2, thì
Khoảng thời gian làm nhiệm vụ bay của tổ tiếp viên được giới hạn là
bao nhiêu?`, answer: `thái thích nghi) từ 05:00 - 05:14, với số lần cất hạ cánh 4, thì khoảng thời gian làm
nhiệm vụ bay của tổ tiếp viên được giới hạn?
→ 11:00
CÂU 17 Thời gian có mặt làm nhiệm vụ của tổ TV (giờ địa phương - trong trạng
thái thích nghi) từ 05:15 - 05:29, với số lần cất hạ cánh là 1 hoặc 2, thì khoảng thời
gian làm nhiệm vụ bay của tổ tiếp viên được giới hạn?
→ 12:15`, keywords: ["Khái", "niệm", "làm", "bay", "hiểu", "thế", "mặt", "giờ", "địa", "phương"], category: "Khai thác (FOM)" },
  { id: 32, question: `(KT8) Khái niệm “Thời gian làm nhiệm vụ bay” được hiểu như thế nào?
Thời gian có mặt làm nhiệm vụ bay (giờ địa phương-trong trạng thái
thích nghi) là từ 14h00-14h29, với số lần cất hạ cánh là 4, thì Khoảng
thời gian làm nhiệm vụ bay tối đa của tổ tiếp viên được giới hạn là bao
nhiêu?`, answer: `thái thích nghi) từ 14:00 – 14:29, với số lần cất hạ cánh 4, thì khoảng thời gian làm
nhiệm vụ bay của tổ tiếp viên được giới hạn?
→ 11:30`, keywords: ["Khái", "niệm", "làm", "bay", "hiểu", "thế", "mặt", "giờ", "địa", "phương"], category: "Khai thác (FOM)" },
  { id: 33, question: `(KT9) Khái niệm “Thời gian làm nhiệm vụ bay” được hiểu như thế nào?
Thời gian có mặt làm nhiệm vụ bay (giờ địa phương-trong trạng thái
thích nghi) là từ 17h00-04h59, với số lần cất hạ cánh là 1 hoặc 2, thì
Khoảng thời gian làm nhiệm vụ bay của tổ tiếp viên được giới hạn là
bao nhiêu?`, answer: `thái thích nghi) từ 17:00 - 04:59, với số lần cất hạ cánh là 1 hoặc 2, thì khoảng thời
gian làm nhiệm vụ bay của tổ tiếp viên được giới hạn?
→ 11:00`, keywords: ["Khái", "niệm", "làm", "bay", "hiểu", "thế", "mặt", "giờ", "địa", "phương"], category: "Khai thác (FOM)" },
  { id: 34, question: `(KT10) Thời gian làm nhiệm vụ là gì?
Tiếp viên Nguyễn Văn A bay CDG-HAN đáp tại HAN lúc 06:30,
chuyển sân bằng vé khách HAN-SGN từ 09h30-11h30. Quãng thời gian
09h30-11h30 được tính là thời gian gì?`, answer: `→ Duty Period: là tổng thời gian từ khi thành viên tổ bay được Nhà khai thác yêu
cầu có mặt làm nhiệm vụ và kết thúc khi thành viên tổ bay không phải làm bất kỳ
nhiệm vụ nào nữa
** Maximum Duty Period: 60 giờ/7 ngày liên tiếp & 110 giờ/14 ngày liên tiếp &
190 giờ/28 ngày liên tiếp

sân vé khách HAN-SGN cất cánh 09h30. Quãng thời gian 07:00-08:30 được tính là
gì?
→ Là thời gian làm nhiệm vụ`, keywords: ["làm", "Nguyễn", "Văn", "bay", "CDG", "HAN", "đáp", "lúc", "chuyển", "sân"], category: "Khai thác (FOM)" },
  { id: 35, question: `(KT11) Thời gian bay tối đa cho 01 nhiệm vụ bay được quy định căn cứ theo
những yếu tố nào?
Tiếp viên Nguyễn Văn A baySGN-CXR-SGN khai thác bằng tàu A321,
khởi hành 09h00- đáp tại SGN 12h30, sau đó bay tiếp SGN-DAD 14:00
đáp tại DAD 15:00, 19:00 chuyển sân vé FOC đáp tại SGN lúc 20:00,
TV có bị vượt thời gian bay tối đa không?`, answer: `→ Tổng thời gian bay không được vượt quá 100 giờ trong 28 ngày liên tục`, keywords: ["bay", "tối", "quy", "định", "căn", "yếu", "Nguyễn", "Văn", "baySGN", "CXR"], category: "Khai thác (FOM)" },
  { id: 36, question: `(KT12) Theo quyđịnh, thời gian chuyển sân trước chuyến bay(có thời gian nghỉ
ít hơn 10h) được cộng dồn vào nhóm thời gian nào?
Tiếp viên Nguyễn Văn A chuyển sân SGN-HAN khởi hành 14h đáp 16h
để bay HAN-BKK-HAN khởi hành 18h cùng ngày. Quãng thời gian
16h15-18h được tính là thời gian gì?`, answer: `để bay HAN-BKK-HAN cất cánh 18:00 cùng ngày. Quãng thời gian 16:15-18:00
được tính là
→ Thời gian làm nhiệm vụ bay

để bay HAN-BKK-HAN cất cánh 18:00 cùng ngày. Quãng thời gian 14:00-18:00
được coi là …
→ Thời gian làm nhiệm vụ bay`, keywords: ["quyđịnh", "chuyển", "sân", "trước", "bay", "nghỉ", "hơn", "cộng", "dồn", "vào"], category: "Khai thác (FOM)" },
  { id: 37, question: `(KT13) Tiếp viên NguyễnVăn A chuyển sân trên VN214 chặng SGN-HAN khởi
hành 14h đáp 16h để bay 1 chuyến khác khởi hành 18h cùng ngày.
Quãng thời gian 14h-16h được tính là thời gian gì?
Tiếp viên B tham gia phục vụ chuyến bay khai thác bằng tàu A321,
VN214 chặng SGN-HAN khởi hành 14h đáp 16h, thời gian làm nhiệm
vụ bay và thời gian bay được tính như thế nào?`, answer: `hành 14:00 đáp 16:00, các khoảng thời gian làm nhiệm vụ ,nhiệm vụ bay và thời
gian bay được tính như thế nào?
→ Đối với TV A các khoảng thời gian được tính như sau:
• Duty Period: 12h30-16h15
• Flight Duty Period: 13h00-16h15


• Flight Time: từ 14h-16h00`, keywords: ["NguyễnVăn", "chuyển", "sân", "VN214", "chặng", "SGN", "HAN", "khởi", "đáp", "bay"], category: "Khai thác (FOM)" },
  { id: 38, question: `(KT14) Theo quy định FOM/CCOM tiếp viên phải giám định lại sức khoẻ trong
các trường hợp nào?
Theo quy định tại căn cứ chính, khi bị ốm, tiếp viên có lịch bay, dự bị
phải thông báo đến OCC bao lâu trước giờ khởi hành, trước giờ trực dự
bị?
Ngoài căn cứ chính, khi bị ốm, TV có lịch bay phải thông báo đến OCC
bao lâu trước giờ khởi hành?`, answer: `* TV báo ốm tối thiểu 4h trước EDT (main base) và 1h trước thời gian Standby.
* Nếu ngoài mainbase, TV phải báo ốm tối thiểu 12h trước EDT
* TV sẽ đi giám định lại sức khoẻ nếu:
- Baoom >= 3 lần / 30 ngày liên tục
- Baoom >20 ngày / lần báo ốm
____________________________________________________`, keywords: ["quy", "định", "FOM", "CCOM", "giám", "lại", "sức", "khoẻ", "trường", "hợp"], category: "Khai thác (FOM)" },
  { id: 39, question: `(KT15) Một Tiếp viên trước khi nhận nhiệm vụ bay mới tại căn cứ chính, ngoài
căn cứ chính cần một khoảng thời gian nghỉ ngơi bao lâu?
Điều kiện nghỉ ngơi gồm những yếu tố gì?`, answer: `→ Ít nhất phải bằng thời gian đã làm nhiệm vụ ngay trước đó nhưng không được ít
hơn 12 giờ (main base) và 10h (ngoài main base)

→ Phải bằng với thời gian làm nhiệm vụ trước đó hoặc không nhỏ hơn 10 giờ, chọn
giá trị lớn hơn. Khoảng thời gian nghỉ ngơi này phải bao gồm 08 giờ ngủ cộng thêm
với thời gian di chuyển và thời gian cho nhu cầu sinh lý cá nhân khác`, keywords: ["trước", "nhận", "bay", "mới", "căn", "chính", "ngoài", "cần", "khoảng", "nghỉ"], category: "Khai thác (FOM)" },
  { id: 40, question: `(KT16) Thời gian nghỉ phục hồi giữa 2 nhiệm vụ bay được quy định như thế
nào?
Tiếp viên Nguyễn Văn A bay SGN-DAD-SGN tàu A321, khởi hành
09h00, đáp tại SGN 12h30, sau đó bay tiếp SGN-DAD 14:00 đáp tại
DAD 15:00, 19:00 chuyển sân về FOC về đáp tại SGN lúc 20:00, thời
gian nghỉ phục hồi theo quy định là bao lâu?`, answer: `là bao lâu
→ 36 giờ liên tục bao gồm 02 đêm địa phương. Định kỳ 02 lần mỗi tháng, khoảng
thời gian nghỉ ngơi hồi phục phải được tăng lên để bao gồm 02 ngày theo giờ địa
phương.
(Phải có ít nhất 2 FOM đôi / tháng)`, keywords: ["nghỉ", "hồi", "giữa", "bay", "quy", "định", "thế", "Nguyễn", "Văn", "SGN"], category: "Khai thác (FOM)" },
  { id: 41, question: `(KT17) Tiếp viên Nguyễn Văn A có lịch trực RA từ 05h00-15h00. Đến 08h tiếp
viên nhận tin nhắn đi bay SGN-HPH-SGN khai thác tàu A321, cất cánh
11h50. Vì lý do thời tiết, chặng bay HPH-SGN delay và đóng chèn tại
SGN lúc 21h cùng ngày. Theo anh/chị, FDP của Tv được tính từ thời
điểm nào, FDP có giá trị là bao nhiêu và có vượt quá giới hạn quy định
hay không?`, answer: `viên nhận tin nhắn đi bay SGN-HPH-SGN cất cánh 11:50. Khoảng thời gian làm
nhiệm vụ bay của TV Nguyễn Văn A được tính từ …
→ 1h trước giờ cất cánh (10:50)`, keywords: ["Nguyễn", "Văn", "lịch", "trực", "RA", "nhận", "tin", "nhắn", "bay", "SGN"], category: "Khai thác (FOM)" },
  { id: 42, question: `(KT18) Số lượng tiếp viên tối thiểu trên những chuyến bay chở khách của Hãng
sẽ được bố trí theo nguyên tắc nào?`, answer: `A/C Type
Long-range overwater Flights

Other Flights

B787

8

A350

8
8/195

6

5

16/162
16/168

5

4

A320

5

4

ATR 72

N/A

2

A321

____________________________________________________



AN TOÀN KHAI THÁC (FOM)`, keywords: ["lượng", "tối", "thiểu", "bay", "chở", "Hãng", "trí", "nguyên", "tắc", "Type"], category: "Khai thác (FOM)" },
  { id: 43, question: `(KT19) Theo FOM, để đổi lịch cho nhau, hai tiếp viên phải thỏa mãn những
điều kiện nào?`, answer: `- Theo tình hình khai thác
- Theo nguyện vọng của TV
- Theo mức độ cần thiết`, keywords: ["FOM", "đổi", "lịch", "nhau", "hai", "thỏa", "mãn", "điều", "kiện", "tình"], category: "Khai thác (FOM)" },
  { id: 44, question: `(KT20) Số lượng tiếp viên tối thiểu cần cho khai thác đối với chuyến baythương
mại trên từng loại máy bay dưới dây là bao nhiêu
- A350
- B787
- A321 (có config ghế 08C/195Y)
- A321 (có config ghế 16C/162Y hoặc 16C/168Y)`, answer: `A/C Type
Long-range overwater Flights

Other Flights

B787

8

A350

8
8/195

6

5

16/162
16/168

5

4

A320

5

4

ATR 72

N/A

2

A321

____________________________________________________



AN TOÀN KHAI THÁC (FOM)`, keywords: ["lượng", "tối", "thiểu", "cần", "khai", "thác", "đối", "baythương", "mại", "từng"], category: "Khai thác (FOM)" },
  { id: 45, question: `(KT21) Khi bố trí tổ tiếp viên tăng cường, cách tính thời gian baycho từng thành
viên tổ tiếp viên làm nhiệm vụ được tính như thế nào?
Khi làm nhiệm vụ bay bao gồm 2 lần làm nhiệm vụ, có khoảng thời gian
nghỉ xen giữa dưới 3 tiếng và đã được thông báo trước cho tổ bay: theo
anh chị, trong tình huống này thì thời gian làm nhiệm vụ bay tối đa có
thể tăng thêm bao nhiêu?`, answer: `viên tổ tiếp viên làm nhiệm vụ …
→ Thời gian bay của mỗi tiếp viên = (Thời gian bay của chặng bay x số tiếp viên
cần thiết cho chuyến bay) / tổng số tiếp viên làm nhiệm vụ`, keywords: ["trí", "tăng", "cường", "cách", "tính", "baycho", "từng", "thành", "làm", "thế"], category: "Khai thác (FOM)" },
  { id: 46, question: `(KT22) Theo anh/chị, khái niệm nghỉ xen giữa (split duty) trong khoảng thời
gian làm nhiệm vụ bay được quy định như thế nào?
Khi làm nhiệm vụ bay bao gồm 2 lần làm nhiệm vụ, có khoảng thời gian
nghỉ xen giữa từ 3 tiếng – 6 tiếng 59 phút và đã được thông báo trước
cho tổ bay: anh chị hãy cho biết thời gian làm nhiệm vụ bay tối đa có
thể tăng thêm bao nhiêu?`, answer: `Là một khoảng thời gian làm hai nhiệm vụ bay bị ngắt quãng bằng một khoảng
nghỉ xen giữa
* Thời gian nghỉ dưới mặt đất phải tối thiểu là 3 giờ liên tục
* Split duty không được tính vào thời gian nghỉ trên chuyến bay (in-flight rest)
* Thời gian nghỉ dưới mặt đất được tính đầy đủ như FDP
* Thời gian nghỉ không bao gồm thời gian cho nhiệm vụ sau, trước chuyến bay (15
phút sau khi đóng chèn, 1 tiếng trước giờ cất cánh ) và thời gian di chuyển. Tổng
thời gian trên không dưới 30 phút
* FDP sẽ được kéo dài nếu split duty ≥ 3h theo công thức sau:
Max planned FDP = Max FDP trong bảng 7.2 + 50% Break Time`, keywords: ["anh", "chị", "khái", "niệm", "nghỉ", "xen", "giữa", "split", "duty", "khoảng"], category: "Khai thác (FOM)" },
  { id: 47, question: `(KT23) Theo anh/chị, khái niệm nghỉ xen giữa (split duty) trong khoảng thời
gian làm nhiệm vụ bay được quy định như thế nào?
Khi làm nhiệm vụ bay bao gồm 2 lần làm nhiệm vụ, có khoảng thời gian
nghỉ xen giữa từ 7 tiếng – 09 tiếng 59 phút và đã được thông báo trước
cho tổ bay: anh chị hãy cho biết thời gian làm nhiệm vụ bay tối đa có
thể tăng thêm bao nhiêu?`, answer: `Là một khoảng thời gian làm hai nhiệm vụ bay bị ngắt quãng bằng một khoảng
nghỉ xen giữa
* Thời gian nghỉ dưới mặt đất phải tối thiểu là 3 giờ liên tục
* Split duty không được tính vào thời gian nghỉ trên chuyến bay (in-flight rest)
* Thời gian nghỉ dưới mặt đất được tính đầy đủ như FDP
* Thời gian nghỉ không bao gồm thời gian cho nhiệm vụ sau, trước chuyến bay (15
phút sau khi đóng chèn, 1 tiếng trước giờ cất cánh ) và thời gian di chuyển. Tổng
thời gian trên không dưới 30 phút
* FDP sẽ được kéo dài nếu split duty ≥ 3h theo công thức sau:
Max planned FDP = Max FDP trong bảng 7.2 + 50% Break Time`, keywords: ["anh", "chị", "khái", "niệm", "nghỉ", "xen", "giữa", "split", "duty", "khoảng"], category: "Khai thác (FOM)" },
  { id: 48, question: `(KT24) Theo anh/chị, khái niệm nghỉ xen giữa (split duty) trong khoảng thời
gian làm nhiệm vụ bay được quy định như thế nào?
Khi làm nhiệm vụ bay bao gồm 2 lần làm nhiệm vụ, có khoảng thời gian
nghỉ xen giữa tối thiểu từ 8 tiếng nghỉ trong khung giờ từ 20h00-08h00+
giờ địa phương, đồng thời thành viên tổ bay được bố trí nơi nghỉ phù
hợp: anh chị hãy cho biết thời gian làm nhiệm vụ bay tối đa có thể tăng
thêm bao nhiêu?`, answer: `Là một khoảng thời gian làm hai nhiệm vụ bay bị ngắt quãng bằng một khoảng
nghỉ xen giữa
* Thời gian nghỉ dưới mặt đất phải tối thiểu là 3 giờ liên tục
* Split duty không được tính vào thời gian nghỉ trên chuyến bay (in-flight rest)
* Thời gian nghỉ dưới mặt đất được tính đầy đủ như FDP
* Thời gian nghỉ không bao gồm thời gian cho nhiệm vụ sau, trước chuyến bay (15
phút sau khi đóng chèn, 1 tiếng trước giờ cất cánh ) và thời gian di chuyển. Tổng
thời gian trên không dưới 30 phút
* FDP sẽ được kéo dài nếu split duty ≥ 3h theo công thức sau:
Max planned FDP = Max FDP trong bảng 7.2 + 50% Break Time`, keywords: ["anh", "chị", "khái", "niệm", "nghỉ", "xen", "giữa", "split", "duty", "khoảng"], category: "Khai thác (FOM)" },
  { id: 49, question: `(DV1.1) Khi khách phản ánh về việc đã bấm nút gọi TV nhưng không thấy TV
đến, TV xử lý tình huống như thế nào?`, answer: `đúng với chủng loại máy bay – Bộ XLTH
FIX:
* Nhận thông tin từ hành khách, xin lỗi và xin phép thu hồi bảng hướng dẫn AT
* Mời thay thế bảng hướng dẫn an toàn khác đúng với chủng loại máy bay đang khai
thác
* Kiểm tra ngẫu nhiên các ghế khác
* Thay thế ngay nếu có sự sai sót
* Kiểm tra ngẫu nhiên thêm 1 vài ghế xem có tờ hướng dẫn an toàn đúng với chủng
loại tàu đang khai thác



* Ngay lập tức lấy đúng tờ khai khác và phục vụ cho hành khách. Kiểm tra kĩ trước
khi mời
* Cảm ơn hành khách đã nhắc nhở
* Báo cáo TVT và chia sẻ thông tin cho tổ TV
CARE:
* Quay lại trò chuyện với khách
* Chia sẻ thêm thông tin về chủng loại tàu bay
* TV giới thiệu chương trình giải trí
* TV mời thêm sản phẩm dịch vụ
ADD:
* Quan sát, chăm sóc hành khách suốt chuyến bay, tìm hiểu sở thích
* Cá nhân hoá hành khách bằng cách hỏi thăm về mức độ hài lòng
* Đáp ứng nhu cầu của hành khách ở mức độ “Đáng ngạc nhiên”`, keywords: ["phản", "ánh", "việc", "bấm", "nút", "gọi", "TV", "nhưng", "thấy", "tình"], category: "Dịch vụ & CSKH" },
  { id: 50, question: `(DV1.2) TV xử lý như thế nào khi khách phản ánh về việc khách đã yêu cầu
TV phục vụ SA/ĐU nhưng sau đó không thấy quay lại?`, answer: `- Bộ XLTH
FIX:
* TV cần nhanh chóng hỏi thăm và tìm hiểu nhu cầu của khách.
* Giải thích cho khách hiểu rằng MB đang chuẩn bị cất/ hạ cánh, khách có thể vui
lòng sử dụng ngay sau khi MB cất/ hạ cánh, tất cả là vì sự an toàn của hành khách
(nhấn mạnh vào sự an toàn của bản thân họ).
* Lưu ý: TV căn cứ vào tình huống cụ thể trên CB để xử lý cho phù hợp và đảm bảo
an toàn cho HK
* TV quay lại sau khi cất/ hạ cánh để hỗ trợ khách.
* Chia sẻ thông tin cho đồng nghiệp khi phục vụ bữa ăn và thời điểm chăm sóc
(smalltalk) lưu ý những biểu hiện liên quan tới sức khoẻ của hành khách (nếu có) để
hỗ trợ
* Quan sát mức độ hài lòng của khách sau khi đã thực hiện giải pháp
* Khách hài lòng: báo cáo cấp trên.
* Khách không hài lòng hoặc TV chưa xử lý ngay được: chuyển gặp cấp trên/ TVT
để hỗ trợ.
* Báo cáo tình huống và hướng giải quyết + tình hình của khách hiện tại cho TVT.
* TVT thu xếp thời gian ra tương tác và trò chuyện với khách (nếu cần)



* Lưu ý: Thông báo cho TVT/ TV làm việc cùng biết sự việc đã xảy ra tránh phát
sinh vấn đề làm khách không hài lòng
CARE:
* Kiểm tra mức độ hài lòng của khách sau khi xử lý.
* Tìm kiếm các giá trị khác khách hàng đang cần để đáp ứng.
* Đáp ứng tối đa các nhu cầu khác hay sở thích của khách có thể mời một loại thức
uống mà khách yêu thích hoặc quan tâm.
ADD:
* Quan sát, lắng nghe để lưu lại sở thích của khách
* Tìm mọi cách để đáp ứng nhu cầu khách ở mức độ “đáng ngạc nhiên”.`, keywords: ["TV", "thế", "phản", "ánh", "việc", "yêu", "cầu", "SA", "nhưng", "sau"], category: "Dịch vụ & CSKH" },
  { id: 51, question: `(DV1.3) Trường hợp khách yêu cầu suất ăn đặc biệt nhưng kháchchưađặttrước
c/bay, TV cần xử lý như thế nào?`, answer: `FIX:
* TV lập tức xin lỗi khách vì đã có sơ suất không phục vụ khách bữa ăn và để khách
phải đợi.
* Xác định vấn đề/mức độ lỗi 1
* Nhanh chóng kiểm tra các lựa chọn thức ăn, giới thiệu với khách, nhận yêu cầu
của khách về thức ăn, thức uống, nhanh chóng phục vụ
* Nhanh chóng phục vụ suất ăn đúng yêu cầu của khách.
* Báo cáo TVT và đồng nghiệp để nắm tình hình khách, tiếp tục quan tâm chú ý
chăm sóc hành khách.
* TVT báo cáo cabinbook
CARE:
* Kiểm tra mức độ hài lòng của khách sau khi xử lý.
* Tìm kiếm các giá trị khác khách hàng đang cần để đáp ứng. (Mời khách dùng thêm
trà, cà phê. Hướng dẫn khách khai form. Khách muốn xem giải trí: phục vụ giải trí/
giới thiệu/ mở chương trình khách yêu thích. Khách muốn ngủ: ngả lưng ghế, kiểm
tra nhiệt độ...)
* Đáp ứng tối đa các nhu cầu khác hay sở thích của khách
* Sau khi khách dùng bữa, TV phụ trách khu vực ghế khách xin phép thu dọn, xin
lỗi khách.
ADD:
* TVT xin lỗi khách một lần nữa và cảm ơn sự thông cảm của khách.
* Quan sát, lắng nghe để lưu lại sở thích của khách



* Tìm mọi cách để đáp ứng nhu cầu khách ở mức độ “đáng ngạc nhiên”. Thông báo
cho tổ TV chuyến bay nối chuyến để tránh xảy ra tình huống tương tự`, keywords: ["Trường", "hợp", "yêu", "cầu", "suất", "đặc", "biệt", "nhưng", "kháchchưađặttrước", "bay"], category: "Dịch vụ & CSKH" },
  { id: 52, question: `(DV1.4) TV cần xử lý như thế nào khi thấy trẻ em trên CB la khóc/ đi lại trong
khoang khách... ảnh hưởng đến sự nghỉ ngơi của các khách khác.`, answer: `FIX:
* Ngay lập tức xin lỗi khách.
* Kiểm tra xem tư trang của khách có bị ảnh hưởng hay không
* Hỗ trợ làm sạch vết bẩn.
* Đổi chỗ cho khách.
* Ghi nhận sự việc trong Biên bản vụ việc để ĐTV chi trả chi phí giặt ủi
* TV báo cáo ngay cho TVT
* TVT xin lỗi khách
* TVT báo cáo trên Cabin book (sự việc, xử lý của TV, cảm xúc của khách)
CARE:
* Quan tâm chăm sóc khách suốt thời gian còn lại của chuyến bay
* Tìm kiếm các giá trị khác khách hàng đang cần để đáp ứng
* Hỗ trợ lấy hành lý và xuống máy bay
ADD:
* Quan sát biết khách thích rượu pha, mời/ hướng dẫn khách pha 1 ly thức uống
điểm nhấn.
* Chuyển thông tin khách và sự việc cho nhân viên mặt đất/tổ TV nối chuyến tránh
lập lại lỗi tương tự và chủ động quan tâm chăm sóc khách.
* Bồi thường gắn kết (trường hợp TV làm đổ nước vào người khách): Viết phiếu ghi
nhận thông tin phục hồi và bảo đảm dịch vụ.`, keywords: ["TV", "cần", "thế", "thấy", "trẻ", "CB", "khóc", "lại", "khoang", "ảnh"], category: "Dịch vụ & CSKH" },
  { id: 53, question: `(DV1.5) Tại sân bay nước ngoài, khi nhận máy bay, nếu xảy ra trường hợp bất
thường về giao nhận giữa 2 tổ, TVT phải làm gì?`, answer: `khách không kịp đặt trước theo quy định - Bộ XLTH
FIX:
* Lắng nghe, chia sẻ, thấu hiểu cảm thông.
* Nhận các thông tin về khách
* TV kiểm tra lại với TVT xem suất ăn đặc biệt của khách đã được cấp lên chuyến
bay chưa.
* Nếu không có suất ăn khách đặt trên chuyến bay: TVT báo ASOC để hỗ trợ cấp
suất ăn phục vụ cho khách nếu kịp.



* Nếu không kịp đặt suất ăn: giới thiệu với khách thành phần bữa ăn được cấp lên
trên CB phù hợp để khách có thể chọn thay thế cho SĂĐB.
* Xem các thành phần của suất ăn hạng C (để riêng các loại rau thit cá…) để sắp xếp
mời khách
* Báo cáo lại TVT về tình huống và phương án thay thế suất ăn cho khách phù hợp.
* TVT/TVT phụ trách khoang thông báo tới tất cả thành viên trong Tổ về tên & số
ghế của hành khách.
* TVT xin lỗi khách (trường hợp khách đã đặt suất ăn đặc biệt nhưng không được
cấp lên CB)
* TVT báo cáo trên Cabinbook (tên, số ghế, loại suất ăn đặc biệt, xử lý của TV, thái
độ của khách)
CARE:
* Quan tâm, chăm sóc suốt thời gian còn lại của chuyến bay
* Giới thiệu quy trình xác nhận lại SĂĐB trước CB
ADD:
* Hỗ trợ khách đặt suất ăn đặc biệt trên các chặng bay nối chuyến. TVT lập Group
viber bao gồm TVT, ASOC, VIAGS để hỗ trợ đặt SADB cho khách
* Thể hiện sự quan tâm hơn nữa
* Làm cho khách hàng thấy mình quan trọng đối với công ty
* Tặng khách món quà nhỏ: túi daynight kit/ bút viết VNA.
* Bồi thường gắn kết: ghi nhận phiếu thông tin phục hồi và đảm bảo nếu cần (trường
hợp khách đã đặt suất ăn đặc biệt nhưng không được cấp lên CB)`, keywords: ["sân", "bay", "nước", "ngoài", "nhận", "máy", "xảy", "trường", "hợp", "bất"], category: "Dịch vụ & CSKH" },
  { id: 54, question: `(DV1.6) Nếu có hành khách than phiền với bạn về thái độ của nhân viên mặt
đất thì bạn sẽ xử lý như thế nào?`, answer: `khỏe) - Bộ XLTH
FIX:
* Đồng cảm, tìm hiểu tình trạng sức khỏe của hành khách
* Thể hiện sự quan tâm
* Mời chăn và dép hạng phổ thông cho khách
* Đưa thông tin cho khách về chất lượng sản phẩm để khách yên tâm sử dụng
* Đánh giá tình hình để quyêt định cho khách sử dụng các loại thuốc có trên máy
bay.
* Nếu khách bị lạnh: Điều chỉnh van gió - Lấy áo khoác cho khách - Điều chỉnh
nhiệt độ - Mời khách thức uống ấm theo sở thích của khách



* Nếu khách bị nóng (do bị sốt): Điều chỉnh van gió - Sử dụng khăn bông chườm
lạnh cho khách (trên các chuyến bay quốc nội, có thể đề xuất dùng khăn bông hạng
C) - Chăm sóc khách nghỉ ngơi.
* Thường xuyên quan sát khách, thăm hỏi tình trạng sức khỏe của khách khi khách
tỉnh giấc. Nếu tình trạng sức khỏe của khách không cải thiện, có biểu hiện xấu đi,
tiếp viên trưởng sẽ thực hiện các bước giải quyết tiếp theo như kêu gọi sự hỗ trợ y
tế trên chuyến bay cũng như tại điểm đến.
* Báo cáo TVT - Chia sẻ thông tin với đồng nghiêp – TVT báo cáo tình trạng sức
khỏe và cách thức xử lý của tiếp viên với cơ trưởng.
CARE:
* Tìm kiếm các giá trị khác khách hàng đang cần để đáp ứng: suốt chuyến bay thường
xuyên quan sát khách để hỗ trợ khách ngay khi khách chưa gọi tiếp viên, nếu là
chặng đường dài sẽ lấy lựa chọn món ăn trước, nếu khách đi 1 mình thì có thể giúp
khách đi toilet nếu khách gặp vấn đề về sức khỏe, giới thiệu chương trình giải trí nếu
khách không ngủ được, giới thiệu dịch vụ hạng C để cho những chuyến bay sau
khách có thể sẽ muốn có tair nghiêm khác biệt.
* Đáp ứng tối đa các nhu cầu khác hay sở thích của khách.
ADD:
* Quan sát, lắng nghe để lưu lại sở thích của khách: Small talk và đưa thông tin về
nhiệt độ tại điểm đến. Nếu là mùa đông, giúp khách chuẩn bị áo ấm, khăn mũ, chuẩn
bị thuốc nếu khách vẫn cần sử dụng, gửi khách thêm nước suối, khăn ướt (nếu cần);
nếu khách đi tiếp tục hành trình trên chuyến bay của VNA, sử dụng kênh liên lạc
viber báo cáo nhanh tình trạng và hành trình của khách để hệ thống có sự hỗ trợ cần
thiết cho khách. để lưu ý chăm sóc sức khỏe cho khách.
* Tìm mọi cách để đáp ứng nhu cầu khách ở mức độ “đáng ngạc nhiên”.`, keywords: ["than", "phiền", "thái", "nhân", "mặt", "đất", "thế", "khỏe", "XLTH", "FIX"], category: "Dịch vụ & CSKH" },
  { id: 55, question: `(DV1.7) Trong khi bay bằng, khi đèn “fasten seatbelt” được bật sáng lần đầu
tiên trong cabin báo hiệu nhiễu động nhẹ, TV cần lưu ý những gì?`, answer: `dụng phòng vệ sinh hạng C - Bộ XLTH
FIX:
* Tiếp cận, đặt câu hỏi để tìm hiểu nhu cầu của khách.
* Thể hiện sự đồng cảm
* Trực tiếp hướng dẫn khách sử dụng phòng vệ sinh dưới khoang Y
* Thông tin cho TV phụ trách khu vực khách ngồi thường xuyên kiểm tra phòng vệ
sinh, đảm bảo sẵn sàng cho khách sử dụng.



* Báo cáo TVT
CARE:
* Chủ động quan tâm các nhu cầu chính đáng của khách trong khả năng.
ADD:
* Ghi nhớ nhu cầu của khách. Thể hiện sự quan tâm chăm sóc hơn nữa.
* Làm cho khách hàng thấy mình quan trọng đối với công ty.`, keywords: ["bay", "bằng", "đèn", "fasten", "seatbelt", "bật", "sáng", "lần", "đầu", "tiên"], category: "Dịch vụ & CSKH" },
  { id: 56, question: `(DV1.8) Hãy nêu quy trình kiểm tra, dọn vệ sinh và quy định về tần suất dọn
phòng vệ sinh trên chuyến bay cho các hạng C, PE/Y?`, answer: `hưởng đến sự nghỉ ngơi của các khách khác - Bộ XLTH
FIX:
* TV đến trả lời chuông gọi của khách tại ghế, giao tiếp mắt và nghe phản ánh của
khách.
* Thể hiện sự đồng cảm, xin phép tìm hiểu nguyên nhân
* Trường hợp các bé nô đùa, nói lớn tiếng trong khoang khách
* Nhẹ nhàng nhắc nhở các bé giữ im lặng và hướng dẫn bé về chỗ ngồi
* Trao đổi với người lớn đi cùng để chăm sóc em bé. Lưu ý người lớn giữ các bé
ngồi tại ghế và cài dây an toàn đề phòng máy bay bay vào khu vực thời tiết xấu có
thể khiến các bé bị thương.
* Mời các bé thức ăn, thức uống và đồ chơi. Giới thiệu chương trình giải trí phù
hợp với lứa tuổi của các bé.
* Trường hợp em bé quấy khóc → Tiếp cận ba mẹ tìm hiểu nguyên nhân bé khóc,
xin phép được hỗ trợ.
* Đề nghị đồng nghiệp hỗ trợ chăm sóc em bé (pha sữa, mời ăn uống, mời đồ chơi)
* Trao đổi nguyên nhân với khách phản ánh, xin phép được hỗ trợ khách nghỉ ngơi
(tai nghe, giới thiệu chương trình nhạc nhẹ, …). Cám ơn khách thông cảm.
* Cùng đồng nghiệp tiếp tục hỗ trợ bố mẹ chăm sóc em bé
* Báo cáo tiếp viên trưởng
* Chia sẻ thông tin với tiếp viên làm việc cùng khoang
CARE:
* Kiểm tra mức độ hài lòng của khách sau khi xử lý
* Tìm kiếm các giá trị khác khách hàng đang cần để đáp ứng
* Đáp ứng tối đa các nhu cầu khác hay sở thích của khách
ADD:
* Quan sát, lắng nghe để lưu lại sở thích của khách



* Small talk để biết hành trình sau đó có thể hỗ trợ được gì cho khách`, keywords: ["quy", "kiểm", "tra", "dọn", "sinh", "định", "tần", "suất", "phòng", "bay"], category: "Dịch vụ & CSKH" },
  { id: 57, question: `(DV1.9) TV cho biết quy định bàn giao tài liệu chuyến bay giữa 2 tổ TV không
gặp nhau tại các sân bay nước ngoài`, answer: `khoang hạng Y lên ngồi tại ghế trống bên cạnh - Bộ XLTH
FIX:
* Tiếp nhận yêu cầu của khách để hỏi ý kiến TVT về việc nâng hạng khách và thực
hiện theo hướng dẫn của TVT.
* TV cảm ơn khách đã yêu mến VNA nhưng TV không được phép nâng hạng ghế
cho khách.
* Xin thông tin số ghế của người nhà khách dưới khoang hạng Y và. Báo với
khách sẽ nói TV phục vụ chu đáo người nhà khách dưới khoang Y và cũng để chủ
động mời người nhà lên tham quan ghế hạng C vào khoảng thời gian thích hợp
* Tiếp viên chủ động gặp gỡ người nhà của hành khách ngay khi có thể.
* Tiếp viên báo cáo TVT về yêu cầu của hành khách, chia sẻ thông tin với đồng
nghiệp về cách giải quyết để cùng thống nhất giải pháp và quan tâm đến người nhà
của khách hạng C.
* TV xin phép TVT cho người nhà khách lên nói chuyện khoảng 5-10 phút sau khi
phục vụ bữa ăn và trước khi các khách khác nghỉ ngơi.
CARE:
* Tiếp viên chủ động mời khách hạng C và người nhà dùng thức uống
* Tiếp viên chủ động trao đổi, chia sẻ thông tin về việc các tiếp viên hạng Y sẽ chăm
sóc người nhà của khách.
* Tiếp viên chủ động giới thiệu các dịch vụ bổ trợ: nâng hạng dịch vụ giờ chót
* Tiếp viên trò chuyện với hành khách để hiểu những giá trị khác khách cần tìm, chủ
động cung cấp dịch vụ ngạc nhiên.
ADD:
* Nếu khách nối chuyến, hoặc cần xuống gấp nhà ga hay đi cùng người nhà là hành
khách cao tuổi, tiếp viên chủ động đề nghị hỗ trợ người nhà của đổi chỗ lên vị trí
gần cửa trước khi hạ cánh, hỗ trợ hành lý xách tay, cung cấp thông tin điểm đến như
thời gian, nhiệt độ và các lưu ý ở nhà ga…
* Cảm ơn khách và gia đình đã ủng hộ VNA
* Chủ động thông báo thời tiết tại điểm đến cho hành khách
* Chúc hành khách tiếp tục có những trải nghiệm thú vị/1 ngày nhiều niềm vui.`, keywords: ["TV", "quy", "định", "bàn", "giao", "tài", "liệu", "bay", "giữa", "gặp"], category: "Dịch vụ & CSKH" },
  { id: 58, question: `(DV1.10) Rượu Cognac làm từ nguyên liệu gì, nồng độ cồn là bao nhiêu, TV
phục vụ khách như thế nào?`, answer: `* Cognac là một dạng của rượu brandy sản xuất tại vùng Cognac của Pháp, được
chưng cất từ loại rượu vang sản sinh trong quá trình lên men nho quả, sau một thời
gian ủ trong thùng gỗ sồi thơm Limousin (oak) (ít nhất 2 năm trước khi được đưa ra
tiêu thụ)
* Nồng độ cồn: 40%
* Phân loại rượu Cognac:



V.S (Very Special) hoặc ★★★(Three Stars) là loại rượu tương đối trẻ, tuổi ít nhất
là 2 năm
V.S.O.P (Very Superior Old Pale) hoặc Reserve có độ tuổi ít nhất 4 năm (VNA đang
sử dụng trên hạng C)
XO (Extra Old) hoặc Napoleon có độ tuổi ít nhất 6 năm
* TV phục vụ rượu cognac bằng ly Brandy. Được mời dùng cùng với món tráng
miệng. Nên uống ở dạng nguyên chất, không pha hoặc thêm đá. Rót hết 1 chai nhỏ
vào ly ~25ml`, keywords: ["Rượu", "Cognac", "làm", "nguyên", "liệu", "nồng", "cồn", "nhiêu", "TV", "thế"], category: "Dịch vụ & CSKH" },
  { id: 59, question: `(DV1.11) TV hãy giới thiệu về rượu Sake: Nguồn gốc, xuất xứ, nguyên liệu,
nồng độ cồn và trình bày cách thức phục vụ rượu Sake trên khoang
hạng C?`, answer: `BOARDING
* TV cần đi trước khách BLND để khách có thể dự đoán được những thay đổi về
hướng đi và khi lên xuống cầu thang.
* Khi chỉ đường và đưa khách về ghế ngồi, TV trợ giúp chỉ chiều (trái hoặc phải)
theo hướng đi của khách và đặt tay khách lên tay ghế hoặc lưng ghế để khách tự vào
ghế ngồi.
* Hỗ trợ cất HLXT trước chuyến bay và trả lại hành lý sau khi hạ cánh.
TRONG QUÁ TRÌNH PHỤC VỤ
* Hạn chế hỏi những câu hỏi cần sự giúp đỡ về thị giác, đặc biệt khi phục vụ đồ ăn
thức uống.
* Giới thiệu các món trên khay, gọi tên hoặc chạm nhẹ vào tay khách và nói rõ những
món được phục vụ trong khay. Lưu ý cho khách biết đồ uống nóng. Giới thiệu các
dụng cụ có trong khay suất ăn hoặc xin phép khách mở bộ dao muỗng dĩa`, keywords: ["TV", "giới", "thiệu", "rượu", "Sake", "Nguồn", "gốc", "xuất", "nguyên", "liệu"], category: "Dịch vụ & CSKH" },
  { id: 60, question: `(DV1.12) TV hãy giới thiệu những điểm chính khi giới thiệu rượu vang?`, answer: `TRONG QUÁ TRÌNH PHỤC VỤ
* Giao tiếp với khách bằng ngôn ngữ biểu thị rõ ràng hoặc bằng chữ viết mà khách
có thể nhìn thấy được vì nhiều khách không nghe được hoặc có khả năng nghe kém,
chỉ có thể hiểu thông qua việc quan sát môi, vẻ mặt hoặc điệu bộ của người nói
* Kiên nhẫn, phát âm rõ ràng và chỉ nói to khi cần thiết
* Không phục vụ khách tai nghe`, keywords: ["TV", "giới", "thiệu", "điểm", "chính", "rượu", "vang", "QU", "TR", "ÌNH"], category: "Dịch vụ & CSKH" },
  { id: 61, question: `(DV1.13) TV hãy cho biết các loại trà và dụng cụ phục vụ trà trên khoang hạng
C của VNA đường bay Nhật?`, answer: `* UM (2-6 tuổi) → cần đặt dịch vụ TV đi cùng
* UM (6-12 tuổi) → không cần đặt dịch vụ TV đi cùng. Trên chuyến bay, TV đi lại
trợ giúp và chăm sóc UM khi có yêu cầu.
* TV đi cùng UM sẽ ngồi tại vị trí đã được giữ chỗ trước, trực tiếp chăm sóc, trợ
giúp riêng UM trong suốt chuyến bay.
* UM ( không có dịch vụ TV đi cùng):
- TVT nhận bàn giao UM đầu chuyến bay từ NVM, bàn giao cho TV phụ trách trợ
giúp UM về chỗ ngồi.
- Hướng dẫn UM: dây an toàn, áo phao, nút gọi TV, … các chức năng tại ghế ngồi,
nhà vệ sinh gần nhất. Dặn UM cuối chuyến ngồi yên tại chỗ, và sẽ được hỗ trợ xuống
máy bay sau các hành khách khác.
Trong suốt quá trình bay, hỗ trợ và chăm sóc UM.
Trước khi hạ cánh, TV nhắc UM một lần nữa, cuối chuyến ngồi yên tại chỗ, và sẽ
được hỗ trợ xuống máy bay sau các hành khách khác
Hỗ trợ hành lý và bàn giao UM cho NVMĐ`, keywords: ["TV", "loại", "trà", "dụng", "khoang", "hạng", "VNA", "đường", "bay", "Nhật"], category: "Dịch vụ & CSKH" },
  { id: 62, question: `(DV1.14) TV hãynêu cách thức giới thiệu, chuẩn bị và phục vụ ngũ cốc vào bữa
sáng trên khoang hạng C?`, answer: `* TV phục vụ khách WCHC di chuyển trong khoang khách của tàu bay nếu khách
yêu cầu. Nếu WCHC có người đi cùng thì sẽ phối hợp với TV để hỗ trợ khách di
chuyển
* TV không lắp và phục vụ xe lăn khi cất/hạ cánh và turbulence
* Sau khi tàu bay ổn định độ cao và bay bằng, nếu khách yêu cầu di chuyển, TV
chuẩn bị xe lăn và hỗ trợ khách (di chuyển đến nhà vệ sinh)
* Khi chuẩn bị hạ cánh, TV cất xe lăn vào đúng vị trí ban đầu`, keywords: ["TV", "hãynêu", "cách", "thức", "giới", "thiệu", "chuẩn", "ngũ", "cốc", "vào"], category: "Dịch vụ & CSKH" },
  { id: 63, question: `(DV1.15) TV hãy nêu cách thức giới thiệu, chuẩn bị và phục vụ khách hạng C
bánh đa cua ăn liền, mì ăn liền, phở ăn liền?`, answer: `Giao nhận đầu chuyến:
* TV nhận bàn giao xe BHMT, check đúng số seal, ổ khoá 2 đầu, nhận chìa khoá và
mở xe để kiểm đếm hàng hoá
* Mở seal túi tiền của chặng mình: ĐI XÁM / VỀ CAM, sẽ có sẵn $50 trong túi
* TV kiểm tra máy POS bán hàng & máy PAYOO thanh toán
→ TV ký nhận phiếu bàn giao xe BHMT
Các giấy tờ mà TV phải nộp về ĐTV:


* Phiếu bàn giao xe BHMT
* Phiếu liệt kê thiết bị, dụng cụ
* Phiếu kê lượng tiền mặt
Cách mở máy POS bán hàng:
* Khởi động máy POS → Password mở máy: 1956 hoặc 1957
* Đăng nhập: MSNV (6430) / Password: 12345678
* Nhập thông tin chuyến bay
* Kiểm đếm số lượng hàng hoá & túi tiền ($50 usd)
* In liên báo cáo`, keywords: ["TV", "cách", "thức", "giới", "thiệu", "chuẩn", "hạng", "bánh", "cua", "liền"], category: "Dịch vụ & CSKH" },
  { id: 64, question: `(DV1.16) TV hãy giới thiệu thông tin sản phẩm tấm trải ghế hạng C: thời điểm,
nội dung, phương thức phục vụ khách?`, answer: `* Bánh mì Croissant, các loại Pastry sẽ được phục vụ trong bữa ăn sáng
* Làm nóng lò 3 phút, nướng bánh mì ở Dryheat 3-5 phút
* Nướng ngoài túi để giữ nguyên hình dáng khi phục vụ`, keywords: ["TV", "giới", "thiệu", "thông", "tin", "sản", "phẩm", "tấm", "trải", "ghế"], category: "Dịch vụ & CSKH" },
  { id: 65, question: `(DV1.17) TV hãy cho biết cách thức phục vụ pho mai và trái cây bằng tay?
- Trường hợp nào sẽ phục vụ bằng tay?
- Phương thức phục vụ?`, answer: `(STANDARD SERVICE 3.4 & Training Edoc)
* Làm nóng lò 3 phút, nướng bánh mì ở Dryheat 3-5 phút
* Lấy các bánh mì ra khỏi túi trước khi nướng
* Bánh mì tỏi & Bánh mì baguette → Dryheat 5-6 phút
* Bánh mì Croissant / bánh mì chocolate / bánh mì tròn / bánh mì cuộn / Bánh ngọt
Đan mạch → Dryheat 3-5 phút
** Bánh mì không cần nướng: bánh mì hạt / bánh mì bột chua / bánh mì champion /
bánh mì đen / bánh mì Clabatta / bánh mì nguyên cám / bánh mì vừng / bánh Muffin
socola`, keywords: ["TV", "cách", "thức", "pho", "mai", "trái", "cây", "bằng", "tay", "Trường"], category: "Dịch vụ & CSKH" },
  { id: 66, question: `(DV1.18) TV hãy nêu cách chuẩn bị và mời thực đơn thức ăn, danh mục thức
uống?`, answer: `* Chuẩn bị thực đơn đúng tuyến đường bay, bữa ăn được phục vụ
* Danh mục thức uống được kẹp vào giữa trang thực đơn phục vụ
* Cầm tối đa 10 cuốn/lần (thực tế cấp 3 bộ/chặng bay)
* Mở sẵn thực đơn có ngôn ngữ phù hợp với khách
* Mời thực đơn: Giới thiệu menu food / drink list - Mời khách tham khảo, thông báo
thời điểm nhận yêu cầu - Xác nhận lại SPML nếu khách có đặt`, keywords: ["TV", "cách", "chuẩn", "mời", "thực", "đơn", "thức", "danh", "mục", "uống"], category: "Dịch vụ & CSKH" },
  { id: 67, question: `(DV1.19) Khi phục vụ khăn nóng hạng C, TV hãy nêu:
- Chuẩn bị nướng khăn?
- Chế độ, thời gian nướng khăn?
- Dụng cụ và cách sắp xếp khi phục vụ khăn nóng?
- Lưu ý khi phục vụ khăn nóng?`, answer: `* TV tiếp cận và tiếp nhận thông tin từ khách: số hiệu chuyến bay tiếp theo, giờ cất
cánh, điểm đến, có khai thác bởi VNA hay không … → đưa thông tin đến TVT
* TV hỗ trợ khách đổi chỗ lên hàng ghế phía trên theo hạng ghế của khách ngồi để
khách xuống máy bay trước nếu còn chỗ trống
* TVT thông báo cho NVMĐ / Đại diện VNA sau khi máy bay hạ cánh để hỗ trợ
khách làm thủ tục`, keywords: ["khăn", "nóng", "hạng", "TV", "Chuẩn", "nướng", "Chế", "Dụng", "cách", "sắp"], category: "Dịch vụ & CSKH" },
  { id: 68, question: `(DV1.20) TV hãy cho biết cách thức nướng và chuẩn bị phục vụ khách món phở
trên khoang C?`, answer: `Thứ tự ưu tiên khi mời thức ăn với các khách trên cùng hàng ghế:
* TV mời từ trong ra ngoài
* Ưu tiên các hành khách là: người cao tuổi - người khuyết tật - trẻ em - phụ nữ
Thứ tự thu khay: thu từ ngoài vào trong`, keywords: ["TV", "cách", "thức", "nướng", "chuẩn", "món", "phở", "khoang", "Thứ", "tiên"], category: "Dịch vụ & CSKH" },
  { id: 69, question: `(DV1.21) TV hãy giới thiệu:
- Các loại dụng cụ
- Mực rót
- Cách thức trình bày mời khách
khi phục vụ trà, café hạng C trên chuyến bay VNA?`, answer: `quy định liên quan (trọng lượng tối đa, các lưu ý khi phục vụ, khách cần đặt
nôi trước bao lâu) PHM 7.1.4 a)
* Khách đặt dịch vụ BSCT ít nhất 24h trước EDT
* Chấp nhận cho trẻ sơ sinh < 11kg và dưới 2 tuổi
* Dịch vụ BSCT áp dụng trên nguyên tắc: khách nào đặt trước sẽ cung ứng trước và
tuỳ thuộc vào số lượng nôi trên chuyến bay
* Vị trí lắp nôi:
- Đầu khoang C (A321)
- Đầu khoang C/PE/Y (A350/B787)
* Quy định:
- Đầu chuyến bay, TV kiểm tra số lượng nôi / Kiểm tra chốt cài còn hoạt động tốt +
nôi đảm bảo chắc chắn, vải không bị sờn hoặc các đường may không bị đứt
- Nôi được lắp sau khi máy bay cất cánh và seatbelt sign OFF
- Nôi được tháo khi máy bay bắt đầu giảm độ cao để hạ cánh và cất vào vị trí ban
đầu theo quy định
- Infant phải được bế ra khỏi nôi khi máy bay bay qua vùng thời tiết xấu và seatbelt
sign ON`, keywords: ["TV", "giới", "thiệu", "loại", "dụng", "Mực", "rót", "Cách", "thức", "mời"], category: "Dịch vụ & CSKH" },
  { id: 70, question: `(DV1.22) TV hãy cho biết các loại café, dụng cụ phục vụ café trên khoang hạng
C của VNA? (đường bay ngắn, trung, dài)`, answer: `khoang khách lạnh thì TV cần làm gì? TCPV 3.2.1
* Trước khi khách lên: 22ºC (mùa hè) / 25ºC (mùa đông)
* Trong chuyến bay: 24-25ºC (nội địa + quốc tế ngắn) 23-24ºC (quốc tế dài/trung)
→ Sai khi cất cánh, TVT quan sát và điều chỉnh nhiệt độ phù hợp



Nếu khoang khách lạnh, TV báo cáo TVT điều chỉnh nhiệt độ trong khoang khách.
TV hỏi thăm sức khoẻ của hành khách (nếu khách báo lạnh) + offer các bước để hỗ
trợ khách (nước ấm, áo khoác, van khí, chăn).`, keywords: ["TV", "loại", "café", "dụng", "khoang", "hạng", "VNA", "đường", "bay", "ngắn"], category: "Dịch vụ & CSKH" },
  { id: 71, question: `(DV1.23) TV hãy nêu tiêu chuẩn phục vụ khăn bông khách hạng C tại thời điểm
đón khách?`, answer: `hạng Y? TCPV 3.1.20
* Không phục vụ đồ uống nóng khi:
- Turbulence và FSB ON
- Bàn ăn không trong tình trạng tốt
- Đèn cá nhân bị hỏng và thời điểm phục vụ, đèn trần trong khoang khách được tắt
* TV giám sát và trợ giúp UM trong quá trình ăn uống
* Trẻ em hoặc khách hạn chế năng lực hành vi → chỉ phục vụ khi có người thân đi
cùng và người thân chịu trách nhiệm đảm bảo an toàn
CHUẨN BỊ:
* Mở ly mỳ/phở/bánh đa cua, thêm gia vị, bỏ gói dầu (nếu có)
* Cho nước sôi 1/2 ly để ngập phần mỳ
* Đậy nắp khoảng 3-5 phút cho mỳ nở ra, dùng đũa trộn đều
* Cho nước suối nguội vào để giảm độ nóng của nước mỳ (mực nước cách miệng ly
3cm, khoảng 2/3 ly mỳ) (nước sôi trên máy bay khoang 80ºC → sau khi cho nước
nguội sẽ còn khoảng 50ºC)
PHỤC VỤ:
* Khi phục vụ, TV cần có tín hiệu để gây sự chú ý với khách hàng
* Bật đèn cá nhân cho khách vào thời điểm phục vụ, đèn trần trong cabin tắt
* Cảnh báo với khách về thức ăn nóng và lưu ý khách cẩn thận, đặc biệt với người
cao tuổi và trẻ em
* Đặt thức ăn ngay ngắn, vững chắc trên khay hoặc bàn ăn`, keywords: ["TV", "tiêu", "chuẩn", "khăn", "bông", "hạng", "điểm", "đón", "TCPV", "uống"], category: "Dịch vụ & CSKH" },
  { id: 72, question: `(DV1.24) TV cho biết quy trình bàn giao xe hàng miễn thuế và giấy tờ kèm theo
tại HAN/SGN cho nhân viên cung ứng?`, answer: `TRÀ:
* Cho tép trà vào bình/tách (số lượng theo quy định)
* Cho 3/4 nước nóng, để 3-5 phút
* Lấy tép trà ra khỏi bình/tách



* Cho 1/4 nước suối để nguội vào, nhiệt độ trà khoảng 70ºC (cách miệng bình 5cm,
cách miệng tách nhỏ 1cm, tách lớn 3cm)
CÀ PHÊ:
* Cho cà phê vào bình/tách (số lượng theo quy định)
* Cho 1 ít nước nóng, lắc nhẹ bình cho cafe tan, đổ thêm nước nóng → tổng lượng
nước nóng khoảng 3/4
* Cho 1/4 nước suối để nguội vào, nhiệt độ cafe khoảng 70ºC (cách miệng bình 5cm,
cách miệng tách nhỏ 1cm, tách lớn 3cm)
** Hạng C: pha cafe đậm nhạt theo yêu cầu của khách
** Hạng Y (quốc nội): Pha hết 1 gói 30g cho 1 bình xanh / (quốc tế) pha hết 2/3 gói
30g cho 1 bình xanh`, keywords: ["TV", "quy", "bàn", "giao", "hàng", "miễn", "thuế", "giấy", "kèm", "HAN"], category: "Dịch vụ & CSKH" },
  { id: 73, question: `(DV1.25) Bạn hãy trình bày nội dung cam kết số 1 của TV. Nêu ý nghĩa của cam
kết. Bạn đánh giá TV đang thực hiện cam kết này như thế nào. (cấp
độ mấy, điểm mạnh, điểm cần cải thiện)`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "TV.", "nghĩa", "đánh", "giá", "TV", "đang"], category: "Dịch vụ & CSKH" },
  { id: 74, question: `(DV1.26) Bạn hãytrình bàynội dung camkết số2 của TV. Tại sao bạn là “người
đầu tiên”. Bạn đánh giá TV đang thực hiện trên chuyến bay như thế
nào. (cấp độ mấy, điểm mạnh, điểm cần cải thiện)`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["hãytrình", "bàynội", "dung", "camkết", "TV.", "sao", "người", "đầu", "tiên", "đánh"], category: "Dịch vụ & CSKH" },
  { id: 75, question: `(DV1.27) Bạn hãy trình bày nội dung cam kết số 3 của TV. Giải thích cụm từ “
nhất quán”, “mong muốn” trong cam kết.
Bạn đánh giá TV đang thực hiện cam kết này trên chuyến bay như thế
nào (cấp độ mấy, điểm mạnh, điểm cần cải thiện)`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "TV.", "Giải", "thích", "cụm", "nhất", "quán"], category: "Dịch vụ & CSKH" },
  { id: 76, question: `(DV1.28) Bạn hãy trình bày nội dung cam kết số 4 của TV. Giải thích cụm từ
“mang lại sự hài lòng thực sự” trong cam kết. Bạn đánh giá TV đang
thực hiện cam kết nàytrên chuyến baynhư thế nào. (cấp độ mấy, điểm
mạnh, điểm cần cải thiện)`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "TV.", "Giải", "thích", "cụm", "mang", "lại"], category: "Dịch vụ & CSKH" },
  { id: 77, question: `(DV1.29) Bạn hãy trình bày cam kết số 5 của TV. Giải thích cụm từ “giá trị dịch
vụ” trong cam kết. Bạn đánh giá TV đang vận dụng thực hiện cam kết
này trên chuyến bay như thế nào. (cấp độ mấy, điểm mạnh, điểm cần
cải thiện)`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["cam", "kết", "TV.", "Giải", "thích", "cụm", "giá", "trị", "đánh", "TV"], category: "Dịch vụ & CSKH" },
  { id: 78, question: `(DV1.30) Bạn hãy trình bày 6 cấp độ dịch vụ (tên gọi). Bạn đang cung cấp dịch
vụ đạt cấp độ nào, cho ví dụ về hành động phục vụ của bản thân để
đạt cấp độ đó và bạn làm gi để đạt được cấp độ cao hơn`, answer: `1/ Cấp độ Tồi tệ (Criminal): Dịch vụ dưới mức tối thiểu, phá vỡ các cam kết về
dịch vụ của Doanh nghiệp với khách hàng. Khách hàng sẽ ghi nhớ, không bao
giờ lựa chọn công ty có dịch vụ ở cấp độ này một lần nữa và họ có thể lan truyền
tin xấu với những người khác.
2/ Cấp độ Không vui (Basic): Dịch vụ chỉ ở mức độ tối thiểu hoặc có điều không
vui, không thoải mái. Mức độ dịch vụ này dẫn đến sự thất bại. Khách hàng có
thể không phàn nàn tuy nhiên họ sẽ kể cho bạn bè tránh xa và chắc chắn họ sẽ
không bao giờ quay trở lại với loại hình dịch vụ này nữa.
3/ Cấp độ Bình thường (Expected): Dịch vụ ở mức độ bình thường, không có
gì đặc biệt. Khách hàng không khen, không chê và có thể quay trở lại nhưng chỉ
khi không còn có sự lựa chọn nào khác. Cấp độ dịch vụ tiêu chuẩn này thường
được coi là chấp nhận được.



4/ Cấp độ Mong muốn (Desired): Dịch vụ cung cấp những điều khách hàng
mong muốn, theo đúng sở thích cá nhân, được quyền lựa chọn theo nhu cầu. Dịch
vụ ở cấp độ như Mong muốn sẽ kéo khách hàng trở lại.
5/ Cấp độ Ngạc nhiên (Surprising): Dịch vụ ở mức độ đặc biệt, giống như món
quà bất ngờ. Sự ngạc nhiên đem đến cho khách hàng nhiều hơn những gì họ
nghĩ và mong muốn. Khách hàng quay trở lại với dịch vụ ngạc nhiên ở mức độ
thường xuyên và họ cũng rất vui khi kể lại cho bạn bè.
6/ Cấp độ Trên cả tuyệt vời (Unbelievable): Dịch vụ ở mức độ gây sửng sốt, khiến
khách hang không thể quên, trở thành huyền thoại, được chia sẻ rộng rãi một
cách tự hào.
DỊCH VỤ SUẤT SẮC: không nằm trong 6 cấp độ dịch vụ nói trên. Dịch vụ xuất
sắc có nghĩa là:
* Liên tục hành động tạo ra nhiều giá trị mới cho người khác.
* Biết mình đang ở cấp độ nào và hành động để lên cấp độ cao hơn.`, keywords: ["cấp", "tên", "gọi", "đang", "cung", "đạt", "động", "bản", "thân", "làm"], category: "Dịch vụ & CSKH" },
  { id: 79, question: `(DV1.31) Bạn hãy trình bày khái niệm “Dịch vụ xuất sắc”
Bạn làm gì để bản thân (Tổ TV) luôn cung cấp dịch vụ xuất sắc trên
từng chuyến bay`, answer: `1/ Cấp độ Tồi tệ (Criminal): Dịch vụ dưới mức tối thiểu, phá vỡ các cam kết về
dịch vụ của Doanh nghiệp với khách hàng. Khách hàng sẽ ghi nhớ, không bao
giờ lựa chọn công ty có dịch vụ ở cấp độ này một lần nữa và họ có thể lan truyền
tin xấu với những người khác.
2/ Cấp độ Không vui (Basic): Dịch vụ chỉ ở mức độ tối thiểu hoặc có điều không
vui, không thoải mái. Mức độ dịch vụ này dẫn đến sự thất bại. Khách hàng có
thể không phàn nàn tuy nhiên họ sẽ kể cho bạn bè tránh xa và chắc chắn họ sẽ
không bao giờ quay trở lại với loại hình dịch vụ này nữa.
3/ Cấp độ Bình thường (Expected): Dịch vụ ở mức độ bình thường, không có
gì đặc biệt. Khách hàng không khen, không chê và có thể quay trở lại nhưng chỉ
khi không còn có sự lựa chọn nào khác. Cấp độ dịch vụ tiêu chuẩn này thường
được coi là chấp nhận được.



4/ Cấp độ Mong muốn (Desired): Dịch vụ cung cấp những điều khách hàng
mong muốn, theo đúng sở thích cá nhân, được quyền lựa chọn theo nhu cầu. Dịch
vụ ở cấp độ như Mong muốn sẽ kéo khách hàng trở lại.
5/ Cấp độ Ngạc nhiên (Surprising): Dịch vụ ở mức độ đặc biệt, giống như món
quà bất ngờ. Sự ngạc nhiên đem đến cho khách hàng nhiều hơn những gì họ
nghĩ và mong muốn. Khách hàng quay trở lại với dịch vụ ngạc nhiên ở mức độ
thường xuyên và họ cũng rất vui khi kể lại cho bạn bè.
6/ Cấp độ Trên cả tuyệt vời (Unbelievable): Dịch vụ ở mức độ gây sửng sốt, khiến
khách hang không thể quên, trở thành huyền thoại, được chia sẻ rộng rãi một
cách tự hào.
DỊCH VỤ SUẤT SẮC: không nằm trong 6 cấp độ dịch vụ nói trên. Dịch vụ xuất
sắc có nghĩa là:
* Liên tục hành động tạo ra nhiều giá trị mới cho người khác.
* Biết mình đang ở cấp độ nào và hành động để lên cấp độ cao hơn.`, keywords: ["khái", "niệm", "xuất", "sắc", "làm", "bản", "thân", "TV", "luôn", "cung"], category: "Dịch vụ & CSKH" },
  { id: 80, question: `(DV1.32) Bạn hãy trình bày cấp độ 5 trong 6 cấp độ dịch vụ, nêu những hành
động của TV ở cấp độ này và kể 1 câu chuyện mà bạn hoặc đồng
nghiệp đã phục vụ hành khách đạt được cấp độ này.`, answer: `1/ Cấp độ Tồi tệ (Criminal): Dịch vụ dưới mức tối thiểu, phá vỡ các cam kết về
dịch vụ của Doanh nghiệp với khách hàng. Khách hàng sẽ ghi nhớ, không bao
giờ lựa chọn công ty có dịch vụ ở cấp độ này một lần nữa và họ có thể lan truyền
tin xấu với những người khác.
2/ Cấp độ Không vui (Basic): Dịch vụ chỉ ở mức độ tối thiểu hoặc có điều không
vui, không thoải mái. Mức độ dịch vụ này dẫn đến sự thất bại. Khách hàng có
thể không phàn nàn tuy nhiên họ sẽ kể cho bạn bè tránh xa và chắc chắn họ sẽ
không bao giờ quay trở lại với loại hình dịch vụ này nữa.
3/ Cấp độ Bình thường (Expected): Dịch vụ ở mức độ bình thường, không có
gì đặc biệt. Khách hàng không khen, không chê và có thể quay trở lại nhưng chỉ
khi không còn có sự lựa chọn nào khác. Cấp độ dịch vụ tiêu chuẩn này thường
được coi là chấp nhận được.



4/ Cấp độ Mong muốn (Desired): Dịch vụ cung cấp những điều khách hàng
mong muốn, theo đúng sở thích cá nhân, được quyền lựa chọn theo nhu cầu. Dịch
vụ ở cấp độ như Mong muốn sẽ kéo khách hàng trở lại.
5/ Cấp độ Ngạc nhiên (Surprising): Dịch vụ ở mức độ đặc biệt, giống như món
quà bất ngờ. Sự ngạc nhiên đem đến cho khách hàng nhiều hơn những gì họ
nghĩ và mong muốn. Khách hàng quay trở lại với dịch vụ ngạc nhiên ở mức độ
thường xuyên và họ cũng rất vui khi kể lại cho bạn bè.
6/ Cấp độ Trên cả tuyệt vời (Unbelievable): Dịch vụ ở mức độ gây sửng sốt, khiến
khách hang không thể quên, trở thành huyền thoại, được chia sẻ rộng rãi một
cách tự hào.
DỊCH VỤ SUẤT SẮC: không nằm trong 6 cấp độ dịch vụ nói trên. Dịch vụ xuất
sắc có nghĩa là:
* Liên tục hành động tạo ra nhiều giá trị mới cho người khác.
* Biết mình đang ở cấp độ nào và hành động để lên cấp độ cao hơn.`, keywords: ["cấp", "động", "TV", "này", "câu", "chuyện", "đồng", "nghiệp", "đạt", "Tồi"], category: "Dịch vụ & CSKH" },
  { id: 81, question: `(DV1.33) Bạn hãy trình bày cấp độ 1 trong 6 cấp độ dịch vụ, nêu ra những hành
động của TV ở cấp độ này và cách phòng ngừa, khắc phục của bạn`, answer: `1/ Cấp độ Tồi tệ (Criminal): Dịch vụ dưới mức tối thiểu, phá vỡ các cam kết về
dịch vụ của Doanh nghiệp với khách hàng. Khách hàng sẽ ghi nhớ, không bao
giờ lựa chọn công ty có dịch vụ ở cấp độ này một lần nữa và họ có thể lan truyền
tin xấu với những người khác.
2/ Cấp độ Không vui (Basic): Dịch vụ chỉ ở mức độ tối thiểu hoặc có điều không
vui, không thoải mái. Mức độ dịch vụ này dẫn đến sự thất bại. Khách hàng có
thể không phàn nàn tuy nhiên họ sẽ kể cho bạn bè tránh xa và chắc chắn họ sẽ
không bao giờ quay trở lại với loại hình dịch vụ này nữa.
3/ Cấp độ Bình thường (Expected): Dịch vụ ở mức độ bình thường, không có
gì đặc biệt. Khách hàng không khen, không chê và có thể quay trở lại nhưng chỉ
khi không còn có sự lựa chọn nào khác. Cấp độ dịch vụ tiêu chuẩn này thường
được coi là chấp nhận được.



4/ Cấp độ Mong muốn (Desired): Dịch vụ cung cấp những điều khách hàng
mong muốn, theo đúng sở thích cá nhân, được quyền lựa chọn theo nhu cầu. Dịch
vụ ở cấp độ như Mong muốn sẽ kéo khách hàng trở lại.
5/ Cấp độ Ngạc nhiên (Surprising): Dịch vụ ở mức độ đặc biệt, giống như món
quà bất ngờ. Sự ngạc nhiên đem đến cho khách hàng nhiều hơn những gì họ
nghĩ và mong muốn. Khách hàng quay trở lại với dịch vụ ngạc nhiên ở mức độ
thường xuyên và họ cũng rất vui khi kể lại cho bạn bè.
6/ Cấp độ Trên cả tuyệt vời (Unbelievable): Dịch vụ ở mức độ gây sửng sốt, khiến
khách hang không thể quên, trở thành huyền thoại, được chia sẻ rộng rãi một
cách tự hào.
DỊCH VỤ SUẤT SẮC: không nằm trong 6 cấp độ dịch vụ nói trên. Dịch vụ xuất
sắc có nghĩa là:
* Liên tục hành động tạo ra nhiều giá trị mới cho người khác.
* Biết mình đang ở cấp độ nào và hành động để lên cấp độ cao hơn.`, keywords: ["cấp", "động", "TV", "này", "cách", "phòng", "ngừa", "khắc", "Tồi", "Criminal"], category: "Dịch vụ & CSKH" },
  { id: 82, question: `(DV1.34) Bạn hãy trình bày cấp độ 2 trong 6 cấp độ dịch vụ, nêu ra những hành
động của TV ở cấp độ này và cách phòng ngừa, khắc phục của bạn`, answer: `1/ Cấp độ Tồi tệ (Criminal): Dịch vụ dưới mức tối thiểu, phá vỡ các cam kết về
dịch vụ của Doanh nghiệp với khách hàng. Khách hàng sẽ ghi nhớ, không bao
giờ lựa chọn công ty có dịch vụ ở cấp độ này một lần nữa và họ có thể lan truyền
tin xấu với những người khác.
2/ Cấp độ Không vui (Basic): Dịch vụ chỉ ở mức độ tối thiểu hoặc có điều không
vui, không thoải mái. Mức độ dịch vụ này dẫn đến sự thất bại. Khách hàng có
thể không phàn nàn tuy nhiên họ sẽ kể cho bạn bè tránh xa và chắc chắn họ sẽ
không bao giờ quay trở lại với loại hình dịch vụ này nữa.
3/ Cấp độ Bình thường (Expected): Dịch vụ ở mức độ bình thường, không có
gì đặc biệt. Khách hàng không khen, không chê và có thể quay trở lại nhưng chỉ
khi không còn có sự lựa chọn nào khác. Cấp độ dịch vụ tiêu chuẩn này thường
được coi là chấp nhận được.



4/ Cấp độ Mong muốn (Desired): Dịch vụ cung cấp những điều khách hàng
mong muốn, theo đúng sở thích cá nhân, được quyền lựa chọn theo nhu cầu. Dịch
vụ ở cấp độ như Mong muốn sẽ kéo khách hàng trở lại.
5/ Cấp độ Ngạc nhiên (Surprising): Dịch vụ ở mức độ đặc biệt, giống như món
quà bất ngờ. Sự ngạc nhiên đem đến cho khách hàng nhiều hơn những gì họ
nghĩ và mong muốn. Khách hàng quay trở lại với dịch vụ ngạc nhiên ở mức độ
thường xuyên và họ cũng rất vui khi kể lại cho bạn bè.
6/ Cấp độ Trên cả tuyệt vời (Unbelievable): Dịch vụ ở mức độ gây sửng sốt, khiến
khách hang không thể quên, trở thành huyền thoại, được chia sẻ rộng rãi một
cách tự hào.
DỊCH VỤ SUẤT SẮC: không nằm trong 6 cấp độ dịch vụ nói trên. Dịch vụ xuất
sắc có nghĩa là:
* Liên tục hành động tạo ra nhiều giá trị mới cho người khác.
* Biết mình đang ở cấp độ nào và hành động để lên cấp độ cao hơn.`, keywords: ["cấp", "động", "TV", "này", "cách", "phòng", "ngừa", "khắc", "Tồi", "Criminal"], category: "Dịch vụ & CSKH" },
  { id: 83, question: `(DV1.35) Bạn hãy trình bày cấp độ 3 trong 6 cấp độ dịch vụ, nêu ra những hành
động của TV ở cấp độ này và cách thức UP-SERVICE`, answer: `1/ Cấp độ Tồi tệ (Criminal): Dịch vụ dưới mức tối thiểu, phá vỡ các cam kết về
dịch vụ của Doanh nghiệp với khách hàng. Khách hàng sẽ ghi nhớ, không bao
giờ lựa chọn công ty có dịch vụ ở cấp độ này một lần nữa và họ có thể lan truyền
tin xấu với những người khác.
2/ Cấp độ Không vui (Basic): Dịch vụ chỉ ở mức độ tối thiểu hoặc có điều không
vui, không thoải mái. Mức độ dịch vụ này dẫn đến sự thất bại. Khách hàng có
thể không phàn nàn tuy nhiên họ sẽ kể cho bạn bè tránh xa và chắc chắn họ sẽ
không bao giờ quay trở lại với loại hình dịch vụ này nữa.
3/ Cấp độ Bình thường (Expected): Dịch vụ ở mức độ bình thường, không có
gì đặc biệt. Khách hàng không khen, không chê và có thể quay trở lại nhưng chỉ
khi không còn có sự lựa chọn nào khác. Cấp độ dịch vụ tiêu chuẩn này thường
được coi là chấp nhận được.



4/ Cấp độ Mong muốn (Desired): Dịch vụ cung cấp những điều khách hàng
mong muốn, theo đúng sở thích cá nhân, được quyền lựa chọn theo nhu cầu. Dịch
vụ ở cấp độ như Mong muốn sẽ kéo khách hàng trở lại.
5/ Cấp độ Ngạc nhiên (Surprising): Dịch vụ ở mức độ đặc biệt, giống như món
quà bất ngờ. Sự ngạc nhiên đem đến cho khách hàng nhiều hơn những gì họ
nghĩ và mong muốn. Khách hàng quay trở lại với dịch vụ ngạc nhiên ở mức độ
thường xuyên và họ cũng rất vui khi kể lại cho bạn bè.
6/ Cấp độ Trên cả tuyệt vời (Unbelievable): Dịch vụ ở mức độ gây sửng sốt, khiến
khách hang không thể quên, trở thành huyền thoại, được chia sẻ rộng rãi một
cách tự hào.
DỊCH VỤ SUẤT SẮC: không nằm trong 6 cấp độ dịch vụ nói trên. Dịch vụ xuất
sắc có nghĩa là:
* Liên tục hành động tạo ra nhiều giá trị mới cho người khác.
* Biết mình đang ở cấp độ nào và hành động để lên cấp độ cao hơn.`, keywords: ["cấp", "động", "TV", "này", "cách", "thức", "UP", "SERVICE", "Tồi", "Criminal"], category: "Dịch vụ & CSKH" },
  { id: 84, question: `(DV1.36) Bạn hãy trình bày cấp độ 4 trong 6 cấp độ dịch vụ, nêu hành động của
TV và kể 1 hành động mà bạn hoặc đồng nghiệp đã phục vụ khách
hàng đạt được cấp độ này`, answer: `1/ Cấp độ Tồi tệ (Criminal): Dịch vụ dưới mức tối thiểu, phá vỡ các cam kết về
dịch vụ của Doanh nghiệp với khách hàng. Khách hàng sẽ ghi nhớ, không bao
giờ lựa chọn công ty có dịch vụ ở cấp độ này một lần nữa và họ có thể lan truyền
tin xấu với những người khác.
2/ Cấp độ Không vui (Basic): Dịch vụ chỉ ở mức độ tối thiểu hoặc có điều không
vui, không thoải mái. Mức độ dịch vụ này dẫn đến sự thất bại. Khách hàng có
thể không phàn nàn tuy nhiên họ sẽ kể cho bạn bè tránh xa và chắc chắn họ sẽ
không bao giờ quay trở lại với loại hình dịch vụ này nữa.
3/ Cấp độ Bình thường (Expected): Dịch vụ ở mức độ bình thường, không có
gì đặc biệt. Khách hàng không khen, không chê và có thể quay trở lại nhưng chỉ
khi không còn có sự lựa chọn nào khác. Cấp độ dịch vụ tiêu chuẩn này thường
được coi là chấp nhận được.



4/ Cấp độ Mong muốn (Desired): Dịch vụ cung cấp những điều khách hàng
mong muốn, theo đúng sở thích cá nhân, được quyền lựa chọn theo nhu cầu. Dịch
vụ ở cấp độ như Mong muốn sẽ kéo khách hàng trở lại.
5/ Cấp độ Ngạc nhiên (Surprising): Dịch vụ ở mức độ đặc biệt, giống như món
quà bất ngờ. Sự ngạc nhiên đem đến cho khách hàng nhiều hơn những gì họ
nghĩ và mong muốn. Khách hàng quay trở lại với dịch vụ ngạc nhiên ở mức độ
thường xuyên và họ cũng rất vui khi kể lại cho bạn bè.
6/ Cấp độ Trên cả tuyệt vời (Unbelievable): Dịch vụ ở mức độ gây sửng sốt, khiến
khách hang không thể quên, trở thành huyền thoại, được chia sẻ rộng rãi một
cách tự hào.
DỊCH VỤ SUẤT SẮC: không nằm trong 6 cấp độ dịch vụ nói trên. Dịch vụ xuất
sắc có nghĩa là:
* Liên tục hành động tạo ra nhiều giá trị mới cho người khác.
* Biết mình đang ở cấp độ nào và hành động để lên cấp độ cao hơn.`, keywords: ["cấp", "động", "TV", "đồng", "nghiệp", "hàng", "đạt", "này", "Tồi", "Criminal"], category: "Dịch vụ & CSKH" },
  { id: 85, question: `(DV1.37) Bạn hãy trình bày cấp độ 6 trong 6 cấp độ dịch vụ, nêu những hành
động của TV ởcấp độnàyvàkể1 hành động màbạn hoặc đồng nghiệp
đã phục vụ khách hàng đạt được cấp độ này`, answer: `1/ Cấp độ Tồi tệ (Criminal): Dịch vụ dưới mức tối thiểu, phá vỡ các cam kết về
dịch vụ của Doanh nghiệp với khách hàng. Khách hàng sẽ ghi nhớ, không bao
giờ lựa chọn công ty có dịch vụ ở cấp độ này một lần nữa và họ có thể lan truyền
tin xấu với những người khác.
2/ Cấp độ Không vui (Basic): Dịch vụ chỉ ở mức độ tối thiểu hoặc có điều không
vui, không thoải mái. Mức độ dịch vụ này dẫn đến sự thất bại. Khách hàng có
thể không phàn nàn tuy nhiên họ sẽ kể cho bạn bè tránh xa và chắc chắn họ sẽ
không bao giờ quay trở lại với loại hình dịch vụ này nữa.
3/ Cấp độ Bình thường (Expected): Dịch vụ ở mức độ bình thường, không có
gì đặc biệt. Khách hàng không khen, không chê và có thể quay trở lại nhưng chỉ
khi không còn có sự lựa chọn nào khác. Cấp độ dịch vụ tiêu chuẩn này thường
được coi là chấp nhận được.



4/ Cấp độ Mong muốn (Desired): Dịch vụ cung cấp những điều khách hàng
mong muốn, theo đúng sở thích cá nhân, được quyền lựa chọn theo nhu cầu. Dịch
vụ ở cấp độ như Mong muốn sẽ kéo khách hàng trở lại.
5/ Cấp độ Ngạc nhiên (Surprising): Dịch vụ ở mức độ đặc biệt, giống như món
quà bất ngờ. Sự ngạc nhiên đem đến cho khách hàng nhiều hơn những gì họ
nghĩ và mong muốn. Khách hàng quay trở lại với dịch vụ ngạc nhiên ở mức độ
thường xuyên và họ cũng rất vui khi kể lại cho bạn bè.
6/ Cấp độ Trên cả tuyệt vời (Unbelievable): Dịch vụ ở mức độ gây sửng sốt, khiến
khách hang không thể quên, trở thành huyền thoại, được chia sẻ rộng rãi một
cách tự hào.
DỊCH VỤ SUẤT SẮC: không nằm trong 6 cấp độ dịch vụ nói trên. Dịch vụ xuất
sắc có nghĩa là:
* Liên tục hành động tạo ra nhiều giá trị mới cho người khác.
* Biết mình đang ở cấp độ nào và hành động để lên cấp độ cao hơn.`, keywords: ["cấp", "động", "TV", "ởcấp", "độnàyvàkể", "màbạn", "đồng", "nghiệp", "hàng", "đạt"], category: "Dịch vụ & CSKH" },
  { id: 86, question: `(DV1.38) Bạn hãy nêu 6 nhu cầu cơ bản của hành khách đi máy bay và phân tích
nhu cầu 1. TV phải làm gì để cung cấp nhu cầu này cho khách?`, answer: `* Flight/bio safety & security
* Timeliness
* Cost
* Services and Quality
* Prompt action
* Appreciation and status`, keywords: ["nhu", "cầu", "bản", "máy", "bay", "phân", "tích", "TV", "làm", "cung"], category: "Dịch vụ & CSKH" },
  { id: 87, question: `(DV1.39) Bạn hãy nêu 6 nhu cầu cơ bản của hành khách đi máy bay và phân tích
nhu cầu 2. TV phải làm gì để cung cấp nhu cầu này cho khách?`, answer: `* Flight/bio safety & security
* Timeliness
* Cost
* Services and Quality
* Prompt action
* Appreciation and status`, keywords: ["nhu", "cầu", "bản", "máy", "bay", "phân", "tích", "TV", "làm", "cung"], category: "Dịch vụ & CSKH" },
  { id: 88, question: `(DV1.40) Bạn hãy nêu 6 nhu cầu khách đi máy bay và phân tích nhu cầu 3. TV
phải làm gì để cung cấp nhu cầu này cho khách?`, answer: `* Flight/bio safety & security
* Timeliness
* Cost
* Services and Quality
* Prompt action
* Appreciation and status`, keywords: ["nhu", "cầu", "máy", "bay", "phân", "tích", "TV", "làm", "cung", "cấp"], category: "Dịch vụ & CSKH" },
  { id: 89, question: `(DV1.41) Bạn hãy nêu 6 nhu cầu cơ bản của hành khách đi máy bay và phân tích
nhu cầu 4. TV phải làm gì để cung cấp nhu cầu này cho khách?`, answer: `* Flight/bio safety & security
* Timeliness
* Cost
* Services and Quality
* Prompt action
* Appreciation and status`, keywords: ["nhu", "cầu", "bản", "máy", "bay", "phân", "tích", "TV", "làm", "cung"], category: "Dịch vụ & CSKH" },
  { id: 90, question: `(DV1.42) Bạn hãy nêu 6 nhu cầu cơ bản của hành khách đi máy bay và phân tích
nhu cầu 5. TV phải làm gì để cung cấp nhu cầu này cho khách?`, answer: `* Flight/bio safety & security
* Timeliness
* Cost
* Services and Quality
* Prompt action
* Appreciation and status`, keywords: ["nhu", "cầu", "bản", "máy", "bay", "phân", "tích", "TV", "làm", "cung"], category: "Dịch vụ & CSKH" },
  { id: 91, question: `(DV1.43) Bạn hãy nêu 6 nhu cầu cơ bản của hành khách đi máy bay và phân tích
nhu cầu 6. TV phải làm gì để cung cấp nhu cầu này cho khách?`, answer: `* Flight/bio safety & security
* Timeliness
* Cost
* Services and Quality
* Prompt action
* Appreciation and status`, keywords: ["nhu", "cầu", "bản", "máy", "bay", "phân", "tích", "TV", "làm", "cung"], category: "Dịch vụ & CSKH" },
  { id: 92, question: `(DV1.44) Bạn hãytrình bày4 hạng mục giá trị (haycòn gọi 4 góc nhìn của khách
hàng)
Bạn hãy chọn 1 hạng mục giá trị và tự đánh giá bản thân đang cung
cấp hạng mục này ở cấp độ nào và vì sao?`, answer: `* Sản phẩm chủ đạo: Sản phẩm chủ đạo là lý do chính và đầu tiên khách hàng
đến với bạn.
* Sự thuận tiện: Hệ thống bao gồm các quy trình, phương pháp, công cụ được
sử dụng để cung cấp sản phẩm dịch vụ một cách tiện lợi, nhanh chóng, linh
hoạt, dễ tiếp cận và dễ lựa chọn.
* Tư duy dịch vụ: là cách thức bạn gặp gỡ, đón tiếp và đối xử với người khách.
Đây là lĩnh vực của thái độ, tinh thần chuyên nghiệp, sự thân thiện, sự nhiệt
huyết, sự cam kết và quan tâm chăm sóc và sự cảm thông đối với người khác.
* Phát triển mối quan hệ: Nỗ lực kết nối, duy trì và phát triển quan hệ tốt đẹp
với khách hàng trước, trong và sau quá trình trải nghiệm dịch vụ.`, keywords: ["hãytrình", "hạng", "mục", "giá", "trị", "haycòn", "gọi", "góc", "nhìn", "hàng"], category: "Dịch vụ & CSKH" },
  { id: 93, question: `(DV1.45) Bạn hãy trình bày về hạng mục giá trị “Sản phẩm chủ đạo”. Cho ví dụ
về hạng mục giá trị mà TV cung cấp cho khách
TV cung cấp cho khách ở hạng mục này ở cấp độ nào?`, answer: `* Sản phẩm chủ đạo: Sản phẩm chủ đạo là lý do chính và đầu tiên khách hàng
đến với bạn.
* Sự thuận tiện: Hệ thống bao gồm các quy trình, phương pháp, công cụ được
sử dụng để cung cấp sản phẩm dịch vụ một cách tiện lợi, nhanh chóng, linh
hoạt, dễ tiếp cận và dễ lựa chọn.
* Tư duy dịch vụ: là cách thức bạn gặp gỡ, đón tiếp và đối xử với người khách.
Đây là lĩnh vực của thái độ, tinh thần chuyên nghiệp, sự thân thiện, sự nhiệt
huyết, sự cam kết và quan tâm chăm sóc và sự cảm thông đối với người khác.
* Phát triển mối quan hệ: Nỗ lực kết nối, duy trì và phát triển quan hệ tốt đẹp
với khách hàng trước, trong và sau quá trình trải nghiệm dịch vụ.`, keywords: ["hạng", "mục", "giá", "trị", "Sản", "phẩm", "chủ", "đạo", "TV", "cung"], category: "Dịch vụ & CSKH" },
  { id: 94, question: `(DV1.46) Bạn hãy trình bày về hạng mục giá trị “Sự thuận tiện”.
Cho ví dụ về hạng mục giá trị mà TV cung cấp cho khách
TV cung cấp cho khách ở hạng mục này ở cấp độ nào?`, answer: `* Sản phẩm chủ đạo: Sản phẩm chủ đạo là lý do chính và đầu tiên khách hàng
đến với bạn.
* Sự thuận tiện: Hệ thống bao gồm các quy trình, phương pháp, công cụ được
sử dụng để cung cấp sản phẩm dịch vụ một cách tiện lợi, nhanh chóng, linh
hoạt, dễ tiếp cận và dễ lựa chọn.
* Tư duy dịch vụ: là cách thức bạn gặp gỡ, đón tiếp và đối xử với người khách.
Đây là lĩnh vực của thái độ, tinh thần chuyên nghiệp, sự thân thiện, sự nhiệt
huyết, sự cam kết và quan tâm chăm sóc và sự cảm thông đối với người khác.
* Phát triển mối quan hệ: Nỗ lực kết nối, duy trì và phát triển quan hệ tốt đẹp
với khách hàng trước, trong và sau quá trình trải nghiệm dịch vụ.`, keywords: ["hạng", "mục", "giá", "trị", "thuận", "tiện", "TV", "cung", "cấp", "này"], category: "Dịch vụ & CSKH" },
  { id: 95, question: `(DV1.47) Bạn hãy trình bày hiểu biết về hạng mục giá trị “Tư duy dịch vụ”.
Cho ví dụ về hạng mục giá trị mà TV cung cấp cho khách
TV cung cấp cho khách ở hạng mục này ở cấp độ nào?`, answer: `* Sản phẩm chủ đạo: Sản phẩm chủ đạo là lý do chính và đầu tiên khách hàng
đến với bạn.
* Sự thuận tiện: Hệ thống bao gồm các quy trình, phương pháp, công cụ được
sử dụng để cung cấp sản phẩm dịch vụ một cách tiện lợi, nhanh chóng, linh
hoạt, dễ tiếp cận và dễ lựa chọn.
* Tư duy dịch vụ: là cách thức bạn gặp gỡ, đón tiếp và đối xử với người khách.
Đây là lĩnh vực của thái độ, tinh thần chuyên nghiệp, sự thân thiện, sự nhiệt
huyết, sự cam kết và quan tâm chăm sóc và sự cảm thông đối với người khác.
* Phát triển mối quan hệ: Nỗ lực kết nối, duy trì và phát triển quan hệ tốt đẹp
với khách hàng trước, trong và sau quá trình trải nghiệm dịch vụ.`, keywords: ["hiểu", "hạng", "mục", "giá", "trị", "duy", "TV", "cung", "cấp", "này"], category: "Dịch vụ & CSKH" },
  { id: 96, question: `(DV1.48) Bạn hãy trình bày hiểu biết về hạng mục giá trị “Phát triển mối quan
hệ”.
Cho ví dụ về hạng mục giá trị mà TV cung cấp cho khách
TV cung cấp cho khách ở hạng mục này ở cấp độ nào?`, answer: `* Sản phẩm chủ đạo: Sản phẩm chủ đạo là lý do chính và đầu tiên khách hàng
đến với bạn.
* Sự thuận tiện: Hệ thống bao gồm các quy trình, phương pháp, công cụ được
sử dụng để cung cấp sản phẩm dịch vụ một cách tiện lợi, nhanh chóng, linh
hoạt, dễ tiếp cận và dễ lựa chọn.
* Tư duy dịch vụ: là cách thức bạn gặp gỡ, đón tiếp và đối xử với người khách.
Đây là lĩnh vực của thái độ, tinh thần chuyên nghiệp, sự thân thiện, sự nhiệt
huyết, sự cam kết và quan tâm chăm sóc và sự cảm thông đối với người khác.
* Phát triển mối quan hệ: Nỗ lực kết nối, duy trì và phát triển quan hệ tốt đẹp
với khách hàng trước, trong và sau quá trình trải nghiệm dịch vụ.`, keywords: ["hiểu", "hạng", "mục", "giá", "trị", "Phát", "triển", "mối", "quan", "TV"], category: "Dịch vụ & CSKH" },
  { id: 97, question: `(DV1.49) Bạn hãy trình bày nội dung cam kết số 2
Bạn nói lời cảm ơn khách khi nào?`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "cảm", "Tôi", "đặc", "biệt"], category: "Dịch vụ & CSKH" },
  { id: 98, question: `(DV1.50) Bạn hãy trình bày nội dung cam kết số 2
Bạn nói lời cảm ơn khách khi nào?
Hãy nói câu cảm ơn khi khách hỗ trợ bạn cất hành lý`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "cảm", "câu", "hỗ", "trợ"], category: "Dịch vụ & CSKH" },
  { id: 99, question: `(DV1.51) Bạn hãy trình bày nội dung cam kết số 2
Bạn nói lời cảm ơn khách khi nào?
Hãy nói câu cảm ơn khi khách chờ bạn làm nóng ly mì tôm`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "cảm", "câu", "chờ", "làm"], category: "Dịch vụ & CSKH" },
  { id: 100, question: `(DV1.52) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời cảm ơn khách khi nào?
Hãy nói câu cảm ơn khi khách thực hiện đề nghị của bạn, ví dụ đưa
khay thức ăn cho bạn thu`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "cảm", "câu", "thực", "hiện"], category: "Dịch vụ & CSKH" },
  { id: 101, question: `(DV1.53) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời cảm ơn khách khi nào?
Hãy nói câu cảm ơn khi khách trợ giúp ý tế cho khách khác`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "cảm", "câu", "trợ", "giúp"], category: "Dịch vụ & CSKH" },
  { id: 102, question: `(DV1.54) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khi khách góp ý món cơm thịt bò (cơm bị nát)?`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "góp"], category: "Dịch vụ & CSKH" },
  { id: 103, question: `(DV1.55) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khoang khách có tiếng trẻ con khóc rất
to và khá lâu (5 phút)`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "khoang"], category: "Dịch vụ & CSKH" },
  { id: 104, question: `(DV1.56) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãynói câu xin lỗi khách khi chuyến baybị delaydo kiểm tra kỹthuật
máy bay tại TSN 30 phút (phát sinh sau khi khách đã lên tàu)`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "Hãynói", "câu"], category: "Dịch vụ & CSKH" },
  { id: 105, question: `(DV1.57) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách va xe vào chân khách, gây tím bầm`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "vào"], category: "Dịch vụ & CSKH" },
  { id: 106, question: `(DV1.58) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khách phàn nàn TV phát thanh kém,
không nghe rõ`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 107, question: `(DV1.59) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "Tôi", "đặc"], category: "Dịch vụ & CSKH" },
  { id: 108, question: `(DV1.60) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khách phàn nàn món ăn có vật lạ trong
salad cá hồi`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 109, question: `(DV1.61) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khách phàn nàn chuyến bay của VNA
thường bị delay (chuyến bay hôm nay cũng bị delay).`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 110, question: `(DV1.62) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khách phàn nàn chương trình giải trí
không có nhiều lựa chọn`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 111, question: `(DV1.63) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khách phàn nàn thức ăn, thức uống trên
chuyến bay ít thay đổi`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 112, question: `(DV1.64) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khách phàn nàn bỏ sót không phục vụ
khách khăn lau tay`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 113, question: `(DV1.65) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khách phàn nàn không có chỗ để hành
lý bên trên chỗ ngồi`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 114, question: `(DV1.66) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khách phàn nàn không có cà phê Cold
Brew trên chuyến bay`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 115, question: `(DV1.67) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khi khách phàn nàn có ít lựa chọn rượu vang trên
chuyến bay? Khách thích rượu Vang đỏ Bordeaux – 2012?`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 116, question: `(DV1.68) Kỹ năng quan sát hiệu quả đóng vai trò như thế nào trong việc thực
hiện cam kết 5?`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["Kỹ", "năng", "quan", "sát", "hiệu", "quả", "đóng", "vai", "trò", "thế"], category: "Dịch vụ & CSKH" },
  { id: 117, question: `(DV1.69) Nếu thực hiện được cam kết 5, bạn sẽ mang lại cảm xúc cho khách
hành ở cấp độ mấy? Vì sao?
Hãy đưa ra một ví dụ mà bạn thực hiện cam kết 5 vào thời điểm tạm
biệt khách?`, answer: `1/ Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với
đồng nghiệp và đối tác.


2/ Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho
những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch
vụ một cách an toàn, an ninh và nhất quán.
3/ Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và
cởi mở trong các mối quan hệ.
4/ Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản
thân và luôn nỗ lực hướng tới sự xuất sắc.
5/ Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan
trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm,
chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["thực", "hiện", "cam", "kết", "mang", "lại", "cảm", "xúc", "cấp", "mấy"], category: "Dịch vụ & CSKH" },
  { id: 118, question: `(DV1.70) TVhãynêu 4 hạng mục giá trịtheo ngôn ngữdịch vụchung của VNA?
( hay còn gọi là 4 góc nhìn của khách hàng)
Từng hạng mục giá trị, TV hãy nêu 1 ví dụ mà TV đã thực hiện và
đánh giá dịch vụ đó ở cấp độ nào.`, answer: `* Sản phẩm chủ đạo: Sản phẩm chủ đạo là lý do chính và đầu tiên khách hàng
đến với bạn.
* Sự thuận tiện: Hệ thống bao gồm các quy trình, phương pháp, công cụ được
sử dụng để cung cấp sản phẩm dịch vụ một cách tiện lợi, nhanh chóng, linh
hoạt, dễ tiếp cận và dễ lựa chọn.
* Tư duy dịch vụ: là cách thức bạn gặp gỡ, đón tiếp và đối xử với người khách.
Đây là lĩnh vực của thái độ, tinh thần chuyên nghiệp, sự thân thiện, sự nhiệt
huyết, sự cam kết và quan tâm chăm sóc và sự cảm thông đối với người khác.
* Phát triển mối quan hệ: Nỗ lực kết nối, duy trì và phát triển quan hệ tốt đẹp
với khách hàng trước, trong và sau quá trình trải nghiệm dịch vụ.`, keywords: ["TV", "hãynêu", "hạng", "mục", "giá", "trịtheo", "ngôn", "ngữdịch", "vụchung", "VNA"], category: "Dịch vụ & CSKH" },
  { id: 119, question: `(DV1.71) Trong lúc hiện diện trong khoang khách, TV quan sát và nhận thấy
khách co ro/xoa người (khách bị lạnh).
TV chủ động thực hiện những hành động nào để nâng tầm dịch vụ lên
cấp độ đáng ngạc nhiên?`, answer: `đúng với chủng loại máy bay – Bộ XLTH
FIX:
* Nhận thông tin từ hành khách, xin lỗi và xin phép thu hồi bảng hướng dẫn AT
* Mời thay thế bảng hướng dẫn an toàn khác đúng với chủng loại máy bay đang khai
thác
* Kiểm tra ngẫu nhiên các ghế khác
* Thay thế ngay nếu có sự sai sót
* Kiểm tra ngẫu nhiên thêm 1 vài ghế xem có tờ hướng dẫn an toàn đúng với chủng
loại tàu đang khai thác



* Ngay lập tức lấy đúng tờ khai khác và phục vụ cho hành khách. Kiểm tra kĩ trước
khi mời
* Cảm ơn hành khách đã nhắc nhở
* Báo cáo TVT và chia sẻ thông tin cho tổ TV
CARE:
* Quay lại trò chuyện với khách
* Chia sẻ thêm thông tin về chủng loại tàu bay
* TV giới thiệu chương trình giải trí
* TV mời thêm sản phẩm dịch vụ
ADD:
* Quan sát, chăm sóc hành khách suốt chuyến bay, tìm hiểu sở thích
* Cá nhân hoá hành khách bằng cách hỏi thăm về mức độ hài lòng
* Đáp ứng nhu cầu của hành khách ở mức độ “Đáng ngạc nhiên”`, keywords: ["lúc", "hiện", "diện", "khoang", "TV", "quan", "sát", "nhận", "thấy", "xoa"], category: "Dịch vụ & CSKH" },
  { id: 120, question: `(DV1.72) Bạn hãy cho biết:
- Khái niệm về dịch vụ theo ngôn ngữ dịch vụ chung của Vietnam
Airlines?
- Ba (3) yếu tố: hành động, giá trị, người khác đều quan trọng nhưng
chúng ta cần quan tâm yếu tố nào trước?
- Tài liệu tra cứu “khái niệm về dịch vụ”.`, answer: `- Bộ XLTH
FIX:
* TV cần nhanh chóng hỏi thăm và tìm hiểu nhu cầu của khách.
* Giải thích cho khách hiểu rằng MB đang chuẩn bị cất/ hạ cánh, khách có thể vui
lòng sử dụng ngay sau khi MB cất/ hạ cánh, tất cả là vì sự an toàn của hành khách
(nhấn mạnh vào sự an toàn của bản thân họ).
* Lưu ý: TV căn cứ vào tình huống cụ thể trên CB để xử lý cho phù hợp và đảm bảo
an toàn cho HK
* TV quay lại sau khi cất/ hạ cánh để hỗ trợ khách.
* Chia sẻ thông tin cho đồng nghiệp khi phục vụ bữa ăn và thời điểm chăm sóc
(smalltalk) lưu ý những biểu hiện liên quan tới sức khoẻ của hành khách (nếu có) để
hỗ trợ
* Quan sát mức độ hài lòng của khách sau khi đã thực hiện giải pháp
* Khách hài lòng: báo cáo cấp trên.
* Khách không hài lòng hoặc TV chưa xử lý ngay được: chuyển gặp cấp trên/ TVT
để hỗ trợ.
* Báo cáo tình huống và hướng giải quyết + tình hình của khách hiện tại cho TVT.
* TVT thu xếp thời gian ra tương tác và trò chuyện với khách (nếu cần)



* Lưu ý: Thông báo cho TVT/ TV làm việc cùng biết sự việc đã xảy ra tránh phát
sinh vấn đề làm khách không hài lòng
CARE:
* Kiểm tra mức độ hài lòng của khách sau khi xử lý.
* Tìm kiếm các giá trị khác khách hàng đang cần để đáp ứng.
* Đáp ứng tối đa các nhu cầu khác hay sở thích của khách có thể mời một loại thức
uống mà khách yêu thích hoặc quan tâm.
ADD:
* Quan sát, lắng nghe để lưu lại sở thích của khách
* Tìm mọi cách để đáp ứng nhu cầu khách ở mức độ “đáng ngạc nhiên”.`, keywords: ["Khái", "niệm", "ngôn", "ngữ", "chung", "Vietnam", "Airlines", "yếu", "động", "giá"], category: "Dịch vụ & CSKH" },
  { id: 121, question: `(DV1.73) Bạn hãy cho biết:
-Khái niệm về dịch vụ theo ngôn ngữ dịch vụ chung của Vietnam
Airlines?
-Những “Hành động tạo ra giá trị” khi đón khách lên máy bay
- Tài liệu tra cứu khái niệm về dịch vụ`, answer: `FIX:
* TV lập tức xin lỗi khách vì đã có sơ suất không phục vụ khách bữa ăn và để khách
phải đợi.
* Xác định vấn đề/mức độ lỗi 1
* Nhanh chóng kiểm tra các lựa chọn thức ăn, giới thiệu với khách, nhận yêu cầu
của khách về thức ăn, thức uống, nhanh chóng phục vụ
* Nhanh chóng phục vụ suất ăn đúng yêu cầu của khách.
* Báo cáo TVT và đồng nghiệp để nắm tình hình khách, tiếp tục quan tâm chú ý
chăm sóc hành khách.
* TVT báo cáo cabinbook
CARE:
* Kiểm tra mức độ hài lòng của khách sau khi xử lý.
* Tìm kiếm các giá trị khác khách hàng đang cần để đáp ứng. (Mời khách dùng thêm
trà, cà phê. Hướng dẫn khách khai form. Khách muốn xem giải trí: phục vụ giải trí/
giới thiệu/ mở chương trình khách yêu thích. Khách muốn ngủ: ngả lưng ghế, kiểm
tra nhiệt độ...)
* Đáp ứng tối đa các nhu cầu khác hay sở thích của khách
* Sau khi khách dùng bữa, TV phụ trách khu vực ghế khách xin phép thu dọn, xin
lỗi khách.
ADD:
* TVT xin lỗi khách một lần nữa và cảm ơn sự thông cảm của khách.
* Quan sát, lắng nghe để lưu lại sở thích của khách



* Tìm mọi cách để đáp ứng nhu cầu khách ở mức độ “đáng ngạc nhiên”. Thông báo
cho tổ TV chuyến bay nối chuyến để tránh xảy ra tình huống tương tự`, keywords: ["Khái", "niệm", "ngôn", "ngữ", "chung", "Vietnam", "Airlines", "động", "tạo", "giá"], category: "Dịch vụ & CSKH" },
  { id: 122, question: `(DV1.74) Bạn hãy nêu cách hiểu của bạn về Chu trình dịch vụ và Quy trình dịch
vụ?
- Định nghĩa
- Tầm quan trọng của 2 khái niệm`, answer: `FIX:
* Ngay lập tức xin lỗi khách.
* Kiểm tra xem tư trang của khách có bị ảnh hưởng hay không
* Hỗ trợ làm sạch vết bẩn.
* Đổi chỗ cho khách.
* Ghi nhận sự việc trong Biên bản vụ việc để ĐTV chi trả chi phí giặt ủi
* TV báo cáo ngay cho TVT
* TVT xin lỗi khách
* TVT báo cáo trên Cabin book (sự việc, xử lý của TV, cảm xúc của khách)
CARE:
* Quan tâm chăm sóc khách suốt thời gian còn lại của chuyến bay
* Tìm kiếm các giá trị khác khách hàng đang cần để đáp ứng
* Hỗ trợ lấy hành lý và xuống máy bay
ADD:
* Quan sát biết khách thích rượu pha, mời/ hướng dẫn khách pha 1 ly thức uống
điểm nhấn.
* Chuyển thông tin khách và sự việc cho nhân viên mặt đất/tổ TV nối chuyến tránh
lập lại lỗi tương tự và chủ động quan tâm chăm sóc khách.
* Bồi thường gắn kết (trường hợp TV làm đổ nước vào người khách): Viết phiếu ghi
nhận thông tin phục hồi và bảo đảm dịch vụ.`, keywords: ["cách", "hiểu", "Chu", "Quy", "Định", "nghĩa", "Tầm", "quan", "trọng", "khái"], category: "Dịch vụ & CSKH" },
  { id: 123, question: `(DV1.75) TV hãy nêu 5 giá trị cốt lõi dịch vụ khách hàng của VNA?
Nêu ý nghĩa giá trị cốt lõi số 1?
Bạn đánh giá như thế nào về TV thực hiện giá trị cốt lõi số 1?`, answer: `khách không kịp đặt trước theo quy định - Bộ XLTH
FIX:
* Lắng nghe, chia sẻ, thấu hiểu cảm thông.
* Nhận các thông tin về khách
* TV kiểm tra lại với TVT xem suất ăn đặc biệt của khách đã được cấp lên chuyến
bay chưa.
* Nếu không có suất ăn khách đặt trên chuyến bay: TVT báo ASOC để hỗ trợ cấp
suất ăn phục vụ cho khách nếu kịp.



* Nếu không kịp đặt suất ăn: giới thiệu với khách thành phần bữa ăn được cấp lên
trên CB phù hợp để khách có thể chọn thay thế cho SĂĐB.
* Xem các thành phần của suất ăn hạng C (để riêng các loại rau thit cá…) để sắp xếp
mời khách
* Báo cáo lại TVT về tình huống và phương án thay thế suất ăn cho khách phù hợp.
* TVT/TVT phụ trách khoang thông báo tới tất cả thành viên trong Tổ về tên & số
ghế của hành khách.
* TVT xin lỗi khách (trường hợp khách đã đặt suất ăn đặc biệt nhưng không được
cấp lên CB)
* TVT báo cáo trên Cabinbook (tên, số ghế, loại suất ăn đặc biệt, xử lý của TV, thái
độ của khách)
CARE:
* Quan tâm, chăm sóc suốt thời gian còn lại của chuyến bay
* Giới thiệu quy trình xác nhận lại SĂĐB trước CB
ADD:
* Hỗ trợ khách đặt suất ăn đặc biệt trên các chặng bay nối chuyến. TVT lập Group
viber bao gồm TVT, ASOC, VIAGS để hỗ trợ đặt SADB cho khách
* Thể hiện sự quan tâm hơn nữa
* Làm cho khách hàng thấy mình quan trọng đối với công ty
* Tặng khách món quà nhỏ: túi daynight kit/ bút viết VNA.
* Bồi thường gắn kết: ghi nhận phiếu thông tin phục hồi và đảm bảo nếu cần (trường
hợp khách đã đặt suất ăn đặc biệt nhưng không được cấp lên CB)`, keywords: ["TV", "giá", "trị", "cốt", "lõi", "hàng", "VNA", "nghĩa", "đánh", "thế"], category: "Dịch vụ & CSKH" },
  { id: 124, question: `(DV1.76) TV hãy nêu 5 giá trị cốt lõi dịch vụ khách hàng của VNA?
Nêu ý nghĩa giá trị cốt lõi số 2?
Bạn đánh giá như thế nào về TV thực hiện giá trị cốt lõi số 2?`, answer: `khỏe) - Bộ XLTH
FIX:
* Đồng cảm, tìm hiểu tình trạng sức khỏe của hành khách
* Thể hiện sự quan tâm
* Mời chăn và dép hạng phổ thông cho khách
* Đưa thông tin cho khách về chất lượng sản phẩm để khách yên tâm sử dụng
* Đánh giá tình hình để quyêt định cho khách sử dụng các loại thuốc có trên máy
bay.
* Nếu khách bị lạnh: Điều chỉnh van gió - Lấy áo khoác cho khách - Điều chỉnh
nhiệt độ - Mời khách thức uống ấm theo sở thích của khách



* Nếu khách bị nóng (do bị sốt): Điều chỉnh van gió - Sử dụng khăn bông chườm
lạnh cho khách (trên các chuyến bay quốc nội, có thể đề xuất dùng khăn bông hạng
C) - Chăm sóc khách nghỉ ngơi.
* Thường xuyên quan sát khách, thăm hỏi tình trạng sức khỏe của khách khi khách
tỉnh giấc. Nếu tình trạng sức khỏe của khách không cải thiện, có biểu hiện xấu đi,
tiếp viên trưởng sẽ thực hiện các bước giải quyết tiếp theo như kêu gọi sự hỗ trợ y
tế trên chuyến bay cũng như tại điểm đến.
* Báo cáo TVT - Chia sẻ thông tin với đồng nghiêp – TVT báo cáo tình trạng sức
khỏe và cách thức xử lý của tiếp viên với cơ trưởng.
CARE:
* Tìm kiếm các giá trị khác khách hàng đang cần để đáp ứng: suốt chuyến bay thường
xuyên quan sát khách để hỗ trợ khách ngay khi khách chưa gọi tiếp viên, nếu là
chặng đường dài sẽ lấy lựa chọn món ăn trước, nếu khách đi 1 mình thì có thể giúp
khách đi toilet nếu khách gặp vấn đề về sức khỏe, giới thiệu chương trình giải trí nếu
khách không ngủ được, giới thiệu dịch vụ hạng C để cho những chuyến bay sau
khách có thể sẽ muốn có tair nghiêm khác biệt.
* Đáp ứng tối đa các nhu cầu khác hay sở thích của khách.
ADD:
* Quan sát, lắng nghe để lưu lại sở thích của khách: Small talk và đưa thông tin về
nhiệt độ tại điểm đến. Nếu là mùa đông, giúp khách chuẩn bị áo ấm, khăn mũ, chuẩn
bị thuốc nếu khách vẫn cần sử dụng, gửi khách thêm nước suối, khăn ướt (nếu cần);
nếu khách đi tiếp tục hành trình trên chuyến bay của VNA, sử dụng kênh liên lạc
viber báo cáo nhanh tình trạng và hành trình của khách để hệ thống có sự hỗ trợ cần
thiết cho khách. để lưu ý chăm sóc sức khỏe cho khách.
* Tìm mọi cách để đáp ứng nhu cầu khách ở mức độ “đáng ngạc nhiên”.`, keywords: ["TV", "giá", "trị", "cốt", "lõi", "hàng", "VNA", "nghĩa", "đánh", "thế"], category: "Dịch vụ & CSKH" },
  { id: 125, question: `(DV1.77) TV hãy nêu 5 giá trị cốt lõi dịch vụ khách hàng của VNA?`, answer: `dụng phòng vệ sinh hạng C - Bộ XLTH
FIX:
* Tiếp cận, đặt câu hỏi để tìm hiểu nhu cầu của khách.
* Thể hiện sự đồng cảm
* Trực tiếp hướng dẫn khách sử dụng phòng vệ sinh dưới khoang Y
* Thông tin cho TV phụ trách khu vực khách ngồi thường xuyên kiểm tra phòng vệ
sinh, đảm bảo sẵn sàng cho khách sử dụng.



* Báo cáo TVT
CARE:
* Chủ động quan tâm các nhu cầu chính đáng của khách trong khả năng.
ADD:
* Ghi nhớ nhu cầu của khách. Thể hiện sự quan tâm chăm sóc hơn nữa.
* Làm cho khách hàng thấy mình quan trọng đối với công ty.`, keywords: ["TV", "giá", "trị", "cốt", "lõi", "hàng", "VNA", "dụng", "phòng", "sinh"], category: "Dịch vụ & CSKH" },
  { id: 126, question: `(DV1.78) TV hãy nêu 5 giá trị cốt lõi dịch vụ khách hàng của VNA?
Nêu ý nghĩa giá trị cốt lõi số 4?
Bạn đánh giá như thế nào về TV thực hiện giá trị cốt lõi số 4?`, answer: `hưởng đến sự nghỉ ngơi của các khách khác - Bộ XLTH
FIX:
* TV đến trả lời chuông gọi của khách tại ghế, giao tiếp mắt và nghe phản ánh của
khách.
* Thể hiện sự đồng cảm, xin phép tìm hiểu nguyên nhân
* Trường hợp các bé nô đùa, nói lớn tiếng trong khoang khách
* Nhẹ nhàng nhắc nhở các bé giữ im lặng và hướng dẫn bé về chỗ ngồi
* Trao đổi với người lớn đi cùng để chăm sóc em bé. Lưu ý người lớn giữ các bé
ngồi tại ghế và cài dây an toàn đề phòng máy bay bay vào khu vực thời tiết xấu có
thể khiến các bé bị thương.
* Mời các bé thức ăn, thức uống và đồ chơi. Giới thiệu chương trình giải trí phù
hợp với lứa tuổi của các bé.
* Trường hợp em bé quấy khóc → Tiếp cận ba mẹ tìm hiểu nguyên nhân bé khóc,
xin phép được hỗ trợ.
* Đề nghị đồng nghiệp hỗ trợ chăm sóc em bé (pha sữa, mời ăn uống, mời đồ chơi)
* Trao đổi nguyên nhân với khách phản ánh, xin phép được hỗ trợ khách nghỉ ngơi
(tai nghe, giới thiệu chương trình nhạc nhẹ, …). Cám ơn khách thông cảm.
* Cùng đồng nghiệp tiếp tục hỗ trợ bố mẹ chăm sóc em bé
* Báo cáo tiếp viên trưởng
* Chia sẻ thông tin với tiếp viên làm việc cùng khoang
CARE:
* Kiểm tra mức độ hài lòng của khách sau khi xử lý
* Tìm kiếm các giá trị khác khách hàng đang cần để đáp ứng
* Đáp ứng tối đa các nhu cầu khác hay sở thích của khách
ADD:
* Quan sát, lắng nghe để lưu lại sở thích của khách



* Small talk để biết hành trình sau đó có thể hỗ trợ được gì cho khách`, keywords: ["TV", "giá", "trị", "cốt", "lõi", "hàng", "VNA", "nghĩa", "đánh", "thế"], category: "Dịch vụ & CSKH" },
  { id: 127, question: `(DV1.79) TV hãy nêu 5 giá trị cốt lõi dịch vụ khách hàng của VNA?
Nêu ý nghĩa giá trị cốt lõi số 5?
Bạn đánh giá như thế nào về TV thực hiện giá trị cốt lõi số 5?`, answer: `khoang hạng Y lên ngồi tại ghế trống bên cạnh - Bộ XLTH
FIX:
* Tiếp nhận yêu cầu của khách để hỏi ý kiến TVT về việc nâng hạng khách và thực
hiện theo hướng dẫn của TVT.
* TV cảm ơn khách đã yêu mến VNA nhưng TV không được phép nâng hạng ghế
cho khách.
* Xin thông tin số ghế của người nhà khách dưới khoang hạng Y và. Báo với
khách sẽ nói TV phục vụ chu đáo người nhà khách dưới khoang Y và cũng để chủ
động mời người nhà lên tham quan ghế hạng C vào khoảng thời gian thích hợp
* Tiếp viên chủ động gặp gỡ người nhà của hành khách ngay khi có thể.
* Tiếp viên báo cáo TVT về yêu cầu của hành khách, chia sẻ thông tin với đồng
nghiệp về cách giải quyết để cùng thống nhất giải pháp và quan tâm đến người nhà
của khách hạng C.
* TV xin phép TVT cho người nhà khách lên nói chuyện khoảng 5-10 phút sau khi
phục vụ bữa ăn và trước khi các khách khác nghỉ ngơi.
CARE:
* Tiếp viên chủ động mời khách hạng C và người nhà dùng thức uống
* Tiếp viên chủ động trao đổi, chia sẻ thông tin về việc các tiếp viên hạng Y sẽ chăm
sóc người nhà của khách.
* Tiếp viên chủ động giới thiệu các dịch vụ bổ trợ: nâng hạng dịch vụ giờ chót
* Tiếp viên trò chuyện với hành khách để hiểu những giá trị khác khách cần tìm, chủ
động cung cấp dịch vụ ngạc nhiên.
ADD:
* Nếu khách nối chuyến, hoặc cần xuống gấp nhà ga hay đi cùng người nhà là hành
khách cao tuổi, tiếp viên chủ động đề nghị hỗ trợ người nhà của đổi chỗ lên vị trí
gần cửa trước khi hạ cánh, hỗ trợ hành lý xách tay, cung cấp thông tin điểm đến như
thời gian, nhiệt độ và các lưu ý ở nhà ga…
* Cảm ơn khách và gia đình đã ủng hộ VNA
* Chủ động thông báo thời tiết tại điểm đến cho hành khách
* Chúc hành khách tiếp tục có những trải nghiệm thú vị/1 ngày nhiều niềm vui.`, keywords: ["TV", "giá", "trị", "cốt", "lõi", "hàng", "VNA", "nghĩa", "đánh", "thế"], category: "Dịch vụ & CSKH" },
  { id: 128, question: `(DV1.80) Hãy nêu tiêu chuẩn khoang khách sẵn sàng đón khách lên máy bay?`, answer: `trợ giúp y tế trên CB - Bộ XLTH
FIX:
* Nhanh chóng tiếp cận hành khách
* Lắng nghe, ghi nhận tình trạng sức khỏe hành khách, hỏi thăm để biết thông tin
(bệnh tiền sử, loại thuốc đang dùng, người đi cùng, hiện trạng sức khoẻ…)
* Hỗ trợ trong khả năng (lấy thuốc, phục vụ thuốc có trên máy bay, phục vụ ăn uống
để lấy lại sức, cung cấp khăn, nước ấm, đổi chỗ ra vị trí rông rãi hơn...
* Sơ cứu ngay nếu cần - Gọi trợ giúp y tế
* Trường hợp khách cần trợ giúp y tế khẩn cấp: cơ trưởng quyết định máy bay phải
đáp khẩn.
* TV trong khu vực/ hoặc TV phát hiện khách có vấn đề về sức khỏe báo cáo với
TVT
* TVT báo cáo cơ trưởng (xin phép mở hộp thuốc, sử dụng bình Oxy, tình trạng
khách)
* TVT lập BB về tình trạng sức khỏe bất thường của hành khách (có chữ ký của
người làm chứng), báo cáo Cabin book/E-report
CARE:
* TVT điều hành bao quát tổ TV, phân công TV phụ trách khu vực với sự hỗ trợ của
các TV khác theo dõi và chăm sóc hành khách trong suốt CB
* TVT phải liên hệ bàn giao khách với NVMĐ, Đại diện hoặc y tế sân bay có trách
nhiệm tiếp tục chăm sóc hỗ trợ xách giúp hành lí cho khách.
ADD:
* TVT liên hệ với người nhà khách/ khách để hỏi thăm sức khỏe hành khách (hỏi ý
kiến của Cán bộ liên đội chủ quản)
* TVT/ TV gửi hoa chúc sức khỏe hành khách/ đến bệnh viện thăm hành khách`, keywords: ["tiêu", "chuẩn", "khoang", "sẵn", "sàng", "đón", "lên", "máy", "bay", "trợ"], category: "Dịch vụ & CSKH" },
  { id: 129, question: `(DV1.81) Hãy trình bày quy định TV hiện diện trong khoang khách (Tần suất,
kỹ năng đi lại, quan sát)?`, answer: `máy bay 1 lối đi do không có khí tài thay thế, khách rất khó chịu - Bộ XLTH
FIX:
* TV nhận diện và tiếp cận ngay khi nhận thấy khách muốn nói chuyện, khách biểu
hiện không thoải mái
* Ghi nhận ý kiến khách với thái độ nghiêm túc và cầu thị



* Thể hiện sự đồng cảm với khách: - Em hoàn toàn đồng ý (em hiểu/ em hiểu được
cảm giác …) + Giá trị khách hàng mong muốn.
* Xin lỗi khách với cảm xúc chân thành
* Mời khách về chỗ ngồi
* Phục khách thức ăn/ thức uống đúng yêu cầu/ lựa chọn của khách
* Báo cáo TVT & Chia sẻ thông tin với cả tổ TV
CARE:
* Hướng dẫn các tiện ích tại ghế ngồi cho khách.
* Kiểm tra mức độ hài lòng của khách sau khi xử lý
* Thường xuyên hỏi thăm khách hàng, quan tâm chăm sóc hơn, nhớ sở thích thói
quen của khách
* Tránh không lặp lại vấn đề khác/ tương tự với khách
* Thể hiện sự thấu hiểu, đồng cảm và sẳn sàng hỗ trợ, giúp đỡ thêm
* Cung cấp các dịch vụ khác biệt/ thay thế
ADD:
* Thể hiện sự quan tâm chăm sóc hơn nữa
* Tặng thêm dịch vụ đặc biệt/quà tặng là sản phẩm khách ưa thích, những vật dụng
có logo công ty…
* Làm cho khách hàng thấy mình quan trọng đối với công ty, khách hàng là động
lực để công ty phát triển…
* Tặng Phiếu bồi thường gắn kết trong những tình huống khách có phản ứng gay gắt
hoặc khách bị ảnh hưởng về lịch trình tiếp theo.`, keywords: ["quy", "định", "TV", "hiện", "diện", "khoang", "Tần", "suất", "kỹ", "năng"], category: "Dịch vụ & CSKH" },
  { id: 130, question: `(DV1.82) Khách yêu cầu phục vụ thức uống khi máy bay đang lăn đến đầu
đường băng, chuẩn bị cất cánh, TV xử lý như thế nào?`, answer: `báo với TV sợ bị trễ chuyến bay nối chuyến - Bộ XLTH
FIX:
* Tiếp cận khách ngay khi nhận biết thấy khách có nhu cầu
* Lắng nghe trình bày của khách với sự thấu hiểu và thông cảm
* Áp dụng mẫu câu: Em hiểu rằng + giá trị khách mong muốn
* Xin lỗi khách chân thành
* TV nhận thông tin về CB nối chuyến của khách (xem vé) - Hỏi xem khách có đi
cùng ai không
* Quay lại trả lời khách sau khi báo cáo TVT - TVT báo cáo cho NVMĐ biết thông
tin để phối hợp giúp đỡ khách.



CARE:
* Chăm sóc, phục vụ khách chu đáo, nhiệt tình suốt chuyến bay
* Mời khách xem chương trình giải trí, và thông tin bay trên Air show.
ADD:
* Mời khách thức uống hạng C
* Khi MB sắp hạ cánh, đổi chỗ khách lên hàng ghế phía trên (nếu còn chỗ) cùng
hành lý xách tay của khách và mời khách xuống MB nhanh nhất có thể
* Hỗ trợ hành lý cho khách
* Cảm ơn và chúc khách có hành trình tiếp tốt đẹp`, keywords: ["yêu", "cầu", "thức", "uống", "máy", "bay", "đang", "lăn", "đầu", "đường"], category: "Dịch vụ & CSKH" },
  { id: 131, question: `(DV1.83) Khách yêu cầu phục vụ thức uống nóng khi máy bay giảm độ cao (đã
thông báo Cabin Crew prepare for landing), chuẩn bị hạ cánh, TV xử
lý như thế nào?`, answer: `* Xin lỗi hành khách về sự chậm trễ
* Tìm hiểu ngay về nhu cầu của khách và sẵn lòng đáp ứng ngay yêu cầu của
khách.
* Cám ơn khách đã chờ đợi và xin lỗi khách lần nữa
* Thường xuyên chăm sóc khách trong suốt chuyến bay
* Báo cáo với Trưởng khoang Y, TVT để Trưởng khoang Y, TVT ra hỏi thăm và
xin lỗi khách
* TVT de-briefing/coaching với TV trong khoang/tổ để không xảy ra tình huống
trên trong thời gian còn lại của CB`, keywords: ["yêu", "cầu", "thức", "uống", "nóng", "máy", "bay", "giảm", "cao", "thông"], category: "Dịch vụ & CSKH" },
  { id: 132, question: `(DV1.84) Các lưu ý khi phục vụ khách khiếm thị thức ăn, thức uống trên chuyến
bay?`, answer: `* Xin lỗi khách với thái độ chân thành nhất về sự chậm trễ
* Hỏi yêu cầu của khách và đáp ứng yêu cầu đó một cách nhanh chóng nhất, hỏi
thêm các yêu cầu khác của khách
* Chân thành xin lỗi khách và cảm ơn khách đã thông cảm
* Thường xuyên quan sát, chăm sóc khách trong suốt chuyến bay, tìm cơ hội phục
vụ tốt hơn để nổi bật lên chất lượng phục vụ
* Báo cáo TVT, TVT ra hỏi thăm và xin lỗi khách
* TVT de-briefing/coaching với TV trong khoang/tổ để không xảy ra tình huống
trên trong thời gian còn lại của chuyến bay`, keywords: ["lưu", "khiếm", "thị", "thức", "uống", "bay", "Xin", "lỗi", "thái", "chân"], category: "Dịch vụ & CSKH" },
  { id: 133, question: `(DV1.85) TV hãy nêu quy định khi TV phục vụ bằng xe đẩy trong khoang
khách?`, answer: `* Xin phép hướng dẫn cho khách phòng vệ sinh hạng Y gần nhất chỗ khách đứng.
Giới thiệu tiện nghi bên trong và hỏi khách có cần trợ giúp gì không?
* Nếu khách vẫn nhất định yêu cầu được sử dụng phòng vệ sinh hạng C: xin lỗi
khách phòng vệ sinh hạng C đang kẹt khách. Mời khách sử dụng phòng vệ sinh hạng
Y trước vì lý do khách không phải chờ đợi lâu
* Nếu hành khách đã sử dụng phòng vệ sinh hạng C: TV đợi khách ra, xin phép giải
thích về việc khách hạng C đang nghỉ ngơi, dùng bữa sẽ bất tiện cho việc khách đi
lại và phải chờ đợi. + Hướng dẫn phòng vệ sinh hạng Y gần nhất cho hành khách
* Cảm ơn sự hợp tác của khách`, keywords: ["TV", "quy", "định", "bằng", "đẩy", "khoang", "Xin", "phép", "hướng", "dẫn"], category: "Dịch vụ & CSKH" },
  { id: 134, question: `(DV1.86) TV hãy cho biết cách phục vụ và quan tâm, chăm sóc bà mẹ có em bé
đi cùng trên chuyến bay?`, answer: `của VNA? Training Edoc – Business Class – Dụng cụ phục vụ
* Ly giải khát loại nhỏ (rót cách miệng 2cm)
- Phục vụ thức uống có ga, nước trái cây, nước khoáng, nước tinh khiết, nước suối,
sữa tươi ; Phục vụ bia ; Phục vụ rượu pha
* Ly giải khát loại to (phục vụ như trên) → rót 2/3 ly và Welcome drink rót 1/2
* Ly rượu vang loại nhỏ
- Phục vụ vang trắng, đỏ, hồng (rót 1/2 ly)
- Phục vụ nước suối, champagne (rót cách miệng 2cm)
- Phục vụ vang mạnh, sake nóng/lạnh (rót 1/3 ly từ đáy hoặc 01 chai rượu 50ml)
* Ly rượu vang loại to (phục vụ như trên) → rót 1/3 ly
* Ly rượu mạnh: Phục vụ rượu mạnh uống thẳng, rượu mùi, sake nóng/lạnh (rót
1/3 ly)
* Ly rượu Brandy: Phục vụ Brandy uống thẳng, uống đúp (rót 1/3 ly từ đáy)
* Ly rượu Champagne: Phục vụ rượu champagne (rót 1/3 ly)`, keywords: ["TV", "cách", "quan", "tâm", "chăm", "sóc", "cùng", "bay", "VNA", "Training"], category: "Dịch vụ & CSKH" },
  { id: 135, question: `(DV1.87) Khi boarding, TV cần phải thực hiện những nhiệm vụ gì ngay tại vị trí
đứng chào đón khách C và khách hạng Y/ PE?`, answer: `* Xin lỗi và giải thích lý do không thể phục vụ thức uống nóng
* Giới thiệu khách các thức uống phù hợp có thể phục vụ vào thời điểm này (nước
tinh khiết, nước trái cây, nước ngọt)
* Phục vụ khách và cám ơn khách đã thông cảm. (Lưu ý thu ly đảm bảo an toàn
trên chuyến bay)`, keywords: ["boarding", "TV", "cần", "thực", "hiện", "ngay", "trí", "đứng", "chào", "đón"], category: "Dịch vụ & CSKH" },
  { id: 136, question: `(DV1.88) Hãy nêu thứ tự tổ TV di chuyển trong nhà ga để đảm bảo đội hình di
chuyển phi hành đoàn VNA?`, answer: `* Giám sát HLXT của khách khi boarding: TV nhận diện và yêu cầu nhân viên
PVMÐ xử lý các truờng hợp hành lý xách tay vuợt quá số luợng, kích thuớc, trọng
luợng theo qui định; viết báo cáo chuyến bay ghi nhận thông tin cụ thể sau chuyến
bay theo qui định
* Thời điểm chuẩn bị giảm độ cao: Khi thực hiện kiểm tra khoang khách, Tiếp viên
nhận diện khách lớn tuổi, phụ nữ có thai, trẻ em đi một mình… & nhắc khách nếu
cần sự hỗ trợ xuống máy bay, vui lòng ngồi chờ tại ghế khi máy bay đã hạ cánh
* Phát thanh trên CB: TVT hoặc TV đuợc phân công thực hiện đọc bài phát thanh
“Greeting After Landing - Chào tạm biệt” với nội dung nhắc khách cẩn trọng khi
xuống máy bay bằng xe thang. Khi đứng chào tạm biệt khách, TV thực hiện: Nhắc
khách không nên sử dụng điện thoại và tập trung vào việc xuống cầu thang (nếu
khách đang dùng điện thoại), đề nghị khách nên sử dụng tay vịn cầu thang để an
toàn hơn (đặc biệt khi trời mưa)
* Nhận diện và luu ý tất cả các khách có biểu hiện bên ngoài bất thuờng về sức
khỏe, khách nữ đi giày/ dép cao gót… nên bám vào tay vịn khi xuống cầu thang
* Ðề nghị dừng xuống thang và gọi nhân viên mặt đất phối hợp trợ giúp đối với
các khách gặp khó khăn trong việc mang hành lý xách tay xuống cầu thang như:
phụ nữ có thai đi một mình, khách bế trẻ nhỏ, khách là nguời cao tuổi
* TV báo cáo TVT nếu không có nhân viên sẵn sàng tại chân cầu thang máy bay`, keywords: ["thứ", "TV", "chuyển", "nhà", "đảm", "bảo", "đội", "hình", "phi", "đoàn"], category: "Dịch vụ & CSKH" },
  { id: 137, question: `(DV1.89) Thế nào là khách “No Meal” và quy trình phục vụ khách như thế nào?`, answer: `* Lưu ý khách đã uống khá nhiều đồ uống có cồn với thái độ nhẹ nhàng lịch sự.
Thông báo với khách vì lý do đảm bảo sức khoẻ cho khách, TV không được phép
phục vụ sau 1-2h, sau đó tạm ngưng hoặc dừng hẳn việc phục vụ thức uống có cồn.
Cảnh báo khách có thể gây bất tiện cho bản thân hành khách và cho những hành
khách xung quanh nếu khách say.
* Mời hành khách thức ăn nhẹ như hạt rang, bánh mỳ, phomai và đồ uống không
có cồn để làm chậm quá trình hấp thụ cồn
* Báo cáo TVT và thông báo với các TV khác về tình trạng của khách
* Ðánh giá xác định mức độ say của hành khách để xử trí phù hợp
* Thường xuyên chăm sóc khách trong suốt chuyến bay



* Thực hiện theo hướng dẫn của TVT de-brf/coaching với TV trong khoang/tổ về
tình huống trên trong thời gian còn lại của CB`, keywords: ["Thế", "Meal", "quy", "Lưu", "uống", "khá", "nhiều", "cồn", "thái", "nhẹ"], category: "Dịch vụ & CSKH" },
  { id: 138, question: `(DV1.90) TV cho biết quy định về công tác nhận vật tư vật phẩm phục vụ hành
khách trước CB tại VN`, answer: `* Chân thành xin lỗi khách và lấy làm tiếc đã để xảy ra sự việc trên
* Trước hết, TV cần kiểm tra xem hành khách bị thương tổn do sự va chạm, đánh
giá mức độ ảnh hưởng đến khách (ví dụ như đụng vào gây đau chân)
* Trường hợp khách bị đau chân thì phải dùng biện pháp sơ cứu cho hành khách.
Hỏi thăm hành khách trong suốt chuyến bay xem khách đã cảm thấy đỡ chưa
* Báo cáo TVT thông tin để lập biên bản vụ việc
* Bản thân tiếp viên phải luôn xin lỗi về việc mình đã gây ra để mong hành khách
thông cảm
* Chia sẻ thông tin tới các tiếp viên trong tổ rút kinh nghiệm
* Thường xuyên chăm sóc khách trong suốt chuyến bay
* TVT trực tiếp hỏi thăm, xin lỗi khách và thực hiện viết báo cáo chuyến bay, biên
bản sức khoẻ bất thường …`, keywords: ["TV", "quy", "định", "công", "tác", "nhận", "vật", "phẩm", "trước", "CB"], category: "Dịch vụ & CSKH" },
  { id: 139, question: `(DV1.91) TV cho biết quy định về công tác bàn giao vật tư vật phẩm phục vụ
hành khách sau CB tại VN`, answer: `rộng (B787-9, B787-10, A350) không sử dụng cửa L1, trên chuyến bay, TV
thực hiện các công việc gì?
* TVT chủ động xác nhận thông tin về bãi đỗ và cửa xuống máy bay từ tổ lái vào
thời điểm lấy thông tin nhiệt độ, các thông tin điểm đến trước lúc máy bay giảm độ
cao
* Trường hợp vẫn chưa được cung cấp thông tin: TVT chủ động nhắc tổ lái cung
cấp thông tin về bãi đậu vào giai đoạn "Prepare for landing" hoặc giai đoạn máy
bay vào đến sân đỗ
* Khi máy bay đã vào bãi đỗ, TVT thực hiện quan sát phía bên ngoài máy bay để
chắc chắn về thông tin bãi đỗ, phương tiện sử dụng, vị trí cửa sẽ đưa khách xuống
máy bay
* TVT triển khai TVB/ TVY hướng dẫn khách. TVT di chuyển xuống cửa L2 để
kiểm soát và chào tạm biệt khách
* TVC thông báo & hướng dẫn khách hạng C di chuyển về phía sau. TVC di
chuyển xuống cuối khoang C để đứng chào và hỗ trợ khách



* TVY thực hiện dừng khách Y để khách hạng C xuống máy bay trước tại cửa L2.
+ Riêng đối với máy bay B787-10, tại cửa L2, TVY mời khách Y từ hàng 16-20
xuống máy bay trước, sau đó đóng rèm, dừng khách hạng Y từ hàng 21 để mời
khách hạng C xuống máy bay. Sau đó TV mời khách Y từ hàng 21 xuống máy bay.



QUY ĐỊNH PHỤC HỒI VÀ ĐẢM BẢO DỊCH VỤ BỒI THƯỜNG GẮN KẾT
* PHỤC HỒI DỊCH VỤ: Là một quá trình ghi nhận, phát hiện và xử lý lỗi phát
sinh thuộc trách nhiệm của VNA trong quá trình cung cấp DV đến khách hàng
* ĐẢM BẢO DỊCH VỤ: Là sự cam kết của VNA đối với khách hàng về việc sẽ
thực hiện các hoạt động phục hồi mỗi khi có xảy ra lỗi ở các mức độ khác nhau
* MỤC ĐÍCH: Tạo ra trải nghiệm vui vẻ, thoải mái. Xoa dịu bực bội, khó chịu và
lấy lại niềm tin của khách hàng. Gắn kết và thu hút thêm nhiều khách hàng mới
* GIỚI HẠN:
- Không áp dụng với khách nội bộ sử dụng vé ID, vé giảm
- Không áp dụng trên các chuyến bay thuê chuyến
** THỰC HIỆN
- Căn cứ mức độ lỗi, TVT trao quyền cho TV cung cấp thêm giá trị cho khách hàng
(bồi thường gắn kết)
- TVT đề xuất để khách lựa chọn hình thức bồi thường phù hợp
- TV điền phiếu “Ghi nhận thông tin phục hồi và đảm bảo dịch vụ”
- Gửi khách 1 liên và thông báo xuất trình tại chi nhánh, phòng vé VNA để được hỗ
trợ
- Bồi thường dặm thưởng sẽ được cộng vào tài khoản sau 5-7 ngày
** LƯU Ý: Bồi thường gắn kết khác với MCO
- Bồi thường gắn kết trên cơ sở tiết kiệm chi phí, tận dụng các phương tiện/sản phẩm
sẵn có trên chuyến bay, thể hiện sự cầu thị
- Công cụ bồi thường hạng Y < C (cùng mức độ lỗi)
- TVT cần viết BCCB, lập biên bản vụ việc để theo dõi và cải tiến phù hợp
** MỨC ĐỘ LỖI



LỖI CỤ THỂ

* Món ăn quá mặn/nhạt, vỏ
ghế rách, bẩn, bạc màu,
thảm bẩn …
* Thái độ của TV không
thân thiện, chu đáo, nhiệt
tình với khách
* TV có thái độ không
đúng mực, không tôn trọng
khách …
* Suất ăn có mùi vị bất
thường như ôi thiu, sản
phẩm quá hạn sử dụng
hoặc biến dạng …
* Hệ thống giải trí hư hỏng,
khách có cảm xúc tiêu cực,
leo thang
* Suất ăn có vật lạ nguy
hiểm, HTGT trên chuyến
bay dài bị hỏng, TV làm đổ
đồ ăn/thức uống nóng gây
bỏng cho khách …
* TV phục vụ suất ăn/đồ
uống gây dị ứng với khách
dù khách có thông báo
trước, gây nguy cơ đe doạ
tính mạng của khách
* Khách bị bỏng ở mức
nghiêm trọng
* Suất ăn có vật lạ gây
nguy hiểm cho hành khách

THÁI ĐỘ CỦA KHÁCH SAU
KHI TV KHẮC PHỤC LỖI

Khách chưa hài lòng, gây ra sự
bất tiện nhỏ cho khách hàng

TV QUYẾT ĐỊNH

Level 1: Lỗi nhỏ
KH đánh giá DV không
đúng như tiêu chuẩn đã
cam kết

Khách hàng không hài lòng, gây
ra sự kích động các
cảm xúc tiêu cực

Level 2: Lỗi vừa phải
KH đánh giá DV không
đúng như tiêu chuẩn đã
cam kết

Khách không hài lòng, chịu sự
gián đoạn, sự thiệt hại

Level 3: Lỗi lớn
KH đánh giá DV không
đúng theo cam kết

Khách hàng phải chịu thiệt hại Level 4: Lỗi nghiêm trọng
lớn về thể chất, tinh thần,
KH đánh giá DV không
tài chính
đúng theo cam kết



Nhóm khách hàng

Công cụ bồi thường gắn kết

Khách ưu tiên

Khách phổ thông

Mức độ 1 - Lỗi nhỏ
Không thực hiện bồi thường, tạo thêm giá trị, tập trung vào việc xin lỗi khách hàng,
quan tâm đến khách hàng
Mức độ 2 - Lỗi vừa phải
Dặm thưởng

2000 dặm

1000 dặm

Hành lý miễn cước

01 kiện 23kg

Không áp dụng

Voucher giảm giá

10% discount

5% discount

Mức độ 3 - Lỗi lớn
Dặm thưởng

4000 dặm

2000 dặm

Hành lý miễn cước

01 kiện 32kg

01 kiện 23kg

Voucher giảm giá

15% discount

10% discount

Thẻ mời phòng khách
Business

Áp dụng

Áp dụng

Nâng hạng dịch vụ

Áp dụng

Không áp dụng

Mức độ 4 - Lỗi nghiêm trọng
Dặm thưởng

6000 dặm

4000 dặm

Hành lý miễn cước

02 kiện 32kg

02 kiện 23kg

Voucher giảm giá

20% discount

15% discount

Thẻ mời phòng khách
Business

Áp dụng

Áp dụng

Nâng hạng dịch vụ

Áp dụng

Áp dụng



QUY TRÌNH THỰC HIỆN PHỤC HỒI VÀ ĐẢM BẢO DỊCH VỤ
* Nhận diện lỗi: TV trực tiếp tiếp xúc với khách để xem phản ứng và cảm xúc của
khách
* Đánh giá mức độ lỗi: TV dựa vào bảng “mức độ lỗi” để đánh giá
* Thực hiện khắc phục: Nếu lỗi liên quan trang thiết bị nội thất → dùng MCO và
không dùng bồi thường gắn kết
4/ Cung cấp thêm giá trị mới cho khách → bồi thường gắn kết
- TV dựa vào bảng “công cụ bồi thường” để cung cấp thêm giá trị cho khách hàng
- TVT có thể áp dụng công cụ thấp hơn mức tối đa (VD cộng 1000 dặm thì có thể
offer mức thấp hơn)
- TVT đề xuất 1 trong các công cụ bồi thường (VD chọn 1 hình thức là cộng dặm)
→ lưu ý cộng dặm thưởng chỉ áp dụng cho khách là hội viên Bông Sen Vàng
- TVT có thể nâng hạng dịch vụ cho khách ngay trên chuyến bay (nếu cho phép)
* Điền phiếu xử lý: TVT điền đầy đủ thông tin yêu cầu
- TVT giao khách liên số 01 (xuất trình tại các chi nhánh / phòng vé VNA)
- TVT giữ liên số 02 nộp về ĐTV + ghi BCCB

TIÊU CHUẨN TRANG THIẾT BỊ NỘI THẤT – IFE
BỒI THƯỜNG MCO (Miscellaneous Charge Order)
* Hướng dẫn bồi thường cho hành khách sử dụng thiết bị nội thất có hỏng hóc
- Là khách đi trên các chuyến bay do TCTHK khai thác
- Khách được xếp chỗ vào vị trí áp dụng “bồi thường cho hành khách”
- Khách không thuộc phạm vi sử dụng vé ID của TCTHK
* Phương thức bồi thường
Bồi thường bằng Chứng từ thanh toán dịch vụ vận chuyển hàng không đa mục đích
(MCO). TCTHK có thể linh hoạt thanh toán bằng tiền mặt hoặc chuyển khoản để
bồi thường cho khách (giá trị = 2/3 MCO)
* Cách thức bồi thường cho lỗi phát sinh trên chuyến bay (dành cho TVHK)
- TV trên chuyến bay tổng hợp những hỏng hóc mà Điều kiện xếp khách áp dụng là
“bồi thường cho hành khách”
- TV xác nhận những hành khách sẽ được ghi nhận vào “Phiếu ghi nhận thông tin
về hành khách được bồi thường”



- TV điền đầy đủ thông tin của hành khách vào “Phiếu ghi nhận thông tin về hành
khách được bồi thường” → đưa khách 1 liên vào thông báo gửi cho đại diện VNA
tại sân bay đến để nhận bồi thường hoặc đến bất kì chi nhánh nào của VNA để nhận
bồi thường trong vòng 30 ngày sau chuyến bay

CÁC LỖI ĐƯỢC BỒI THƯỜNG (Phụ lục C)
STT

VỊ TRÍ

1

Hạng C

Chức năng ngả/dựng lưng ghế

2

Hạng C

Chức năng duỗi chân của ghế

Không hoạt động

3

Hạng PE

Chức năng ngả/dựng lưng ghế

Không hoạt động

4

Hạng C

Màn hình cá nhân

Không hoạt động / không xem
được

5

Hạng C

Thiết bị điều khiển giải trí cá nhân
PCU đối với màn hình không có
Mất, không hoạt động
chức năng cảm ứng

6

Hạng C

Hệ thống âm thanh

Không hoạt động

7

Hạng C

Màn hình chung trên máy bay
không có Inseat Video

Không hoạt động

8

Hạng PE

Màn hình cá nhân

Không hoạt động / không xem
được

9

Hạng PE

Thiết bị điều khiển giải trí cá nhân
PCU đối với màn hình không có
Mất, không hoạt động
chức năng cảm ứng

10

Hạng PE

Hệ thống âm thanh

11

Hạng C

TRANG THIẾT BỊ

Toilet trên các chuyến bay từ
2-4 tiếng


MÔ TẢ
Không hoạt động hoặc chức
năng ngả không hoạt động
theo đúng thiết kế

Không hoạt động
* Bồn cầu vỡ, tắc hoặc không
ấn được nút xả bồn cầu
* Vòi cấp nước hỏng
* Thoát nước chậu rửa hỏng,
tắc
* Cửa / Đèn toilet hỏng


12

Hạng Y
(FT >9h)

Chức năng ngả/dựng lưng ghế

Không hoạt động

MỨC BỒI THƯỜNG
Chuyến bay quốc tế (hạng C)
Mức 1: 300 USD

Mức 2: 200 USD

Đường bay Châu Âu

Đường bay HKG

Đường bay Mỹ
Đường bay Úc
Đường bay Nhật
Đường bay Hàn

Đường bay Đài Loan
Đường bay China
Đường bay SIN
Đường bay KUL
Đường bay CGK
Đường bay MNL
Các đường bay khác

Mức 3: 100 USD
Đường bay
Xuyên Đông
Dương

Mức 4: 50 USD
Áp dụng trong
trường hợp hỏng
toilet hạng C

Chuyến bay quốc nội (hạng C)
Mức 1
800.000 VND

Mức 2
600.000 VND

Mức 3
400.000 VND

Mức 4
200.000 VND

HAN –
SGN/VCA/PQC HAN

HAN/SGN –
HUI/DAD/CXR/UIH/VCL
– HAN/SGN
SGN – VDO/VDH/VII –
SGN

Các chặng bay
khác

Áp dụng trong
trường hợp hỏng
toilet hạng C

SGN-HPH-SGN

HAN –
TBB/BMV/DLI/PXU HAN

** HẠNG PE → mức bồi thường = 100 USD/khách (QUỐC TẾ)
** HẠNG Y → mức bồi thường = 70 USD/khách (QUỐC TẾ)

GIÁ TRỊ TIỀN MẶT BỒI THƯỜNG (2/3 MCO)



Chuyến bay quốc tế

Chuyến bay quốc nội

MCO

Tiền mặt / Chuyển
khoản

300 USD
200 USD
100 USD
70 USD
50 USD

200 USD
135 USD
70 USD
50 USD
35 USD

MCO

Tiền mặt /
Chuyển khoản

800.000 VND
600.000 VND
400.000 VND
200.000 VND

550.000 VND
400.000 VND
270.000 VND
150.000 VND

ĐỊNH MỨC GHI PHIẾU BỒI THƯỜNG MCO
* A350 / B787 → 20 PHIẾU (2 CHIỀU)
* A321 → 10 PHIẾU (2 CHIỀU)
* ATR72 → 05 PHIẾU (2 CHIỀU)`, keywords: ["TV", "quy", "định", "công", "tác", "bàn", "giao", "vật", "phẩm", "sau"], category: "Dịch vụ & CSKH" },
  { id: 140, question: `(DV1.92) -TV cho biết các thông tin cần phải ghi khi chuyển tiền bán trà sữa vào
tài khoản của TCTHK?
-TV vào loại “ LotusSky- Trà sữa” trên cabinbook để TV thực hiện
thao tác gì?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["TV", "thông", "tin", "cần", "ghi", "chuyển", "tiền", "bán", "trà", "sữa"], category: "Dịch vụ & CSKH" },
  { id: 141, question: `(DV1.93) TV hãycho biết cách pha trà, café phục vụ khách hạng Y như thế nào?`, answer: `* Pha trà hạng Y: Cho túi trà vào ly/tách, rót nước sôi, đợi 2-3 phút cho trà ngấm đủ độ đậm.
* Pha café hạng Y: Dùng café hoà tan (instant coffee), cho 1 gói café vào ly, rót nước sôi, khuấy đều.
* Lượng nước cách miệng ly khoảng 1-2cm.
* Phục vụ kèm đường và sữa theo yêu cầu của khách.`, keywords: ["TV", "hãycho", "cách", "pha", "trà", "café", "hạng", "thế", "Tham", "khảo"], category: "Dịch vụ & CSKH" },
  { id: 142, question: `(DV1.94) Bạn hãy trình bày nội dung cam kết số 1 của TV. Nêu ý nghĩa của cam
kết. Bạn đánh giá TV đang thực hiện cam kết này như thế nào. (cấp
độ mấy, điểm mạnh, điểm cần cải thiện)`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "TV.", "nghĩa", "đánh", "giá", "TV", "đang"], category: "Dịch vụ & CSKH" },
  { id: 143, question: `(DV1.95) Bạn hãy trình bày nội dung cam kết số 2 của TV. Nêu ý nghĩa của cam
kết. Bạn đánh giá TV đang thực hiện trên chuyến bay như thế nào.
(cấp độ mấy, điểm mạnh, điểm cần cải thiện)`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "TV.", "nghĩa", "đánh", "giá", "TV", "đang"], category: "Dịch vụ & CSKH" },
  { id: 144, question: `(DV1.96) Bạn hãy trình bày nội dung cam kết số 3 của TV. Giải thích cụm từ “
nhất quán” trong cam kết. Bạn đánh giá TV đang thực hiện cam kết
này trên chuyến bay như thế nào (cấp độ mấy, điểm mạnh, điểm cần
cải thiện)`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "TV.", "Giải", "thích", "cụm", "nhất", "quán"], category: "Dịch vụ & CSKH" },
  { id: 145, question: `(DV1.97) Bạn hãy trình bày nội dung cam kết số 4 của TV. Giải thích cụm từ
“mang lại sự hài lòng thực sự” trong cam kết.. Bạn đánh giá TV đang
thực hiện cam kết nàytrên chuyến baynhư thế nào. (cấp độ mấy, điểm
mạnh, điểm cần cải thiện)`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "TV.", "Giải", "thích", "cụm", "mang", "lại"], category: "Dịch vụ & CSKH" },
  { id: 146, question: `(DV1.98) Bạn hãy trình bày cam kết số 5 của TV. Giải thích cụm từ “giá trị dịch
vụ” trong cam kết. Bạn đánh giá TV đang vận dụng thực hiện cam kết
này trên chuyến bay như thế nào. (cấp độ mấy, điểm mạnh, điểm cần
cải thiện)`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["cam", "kết", "TV.", "Giải", "thích", "cụm", "giá", "trị", "đánh", "TV"], category: "Dịch vụ & CSKH" },
  { id: 147, question: `(DV1.99) Bạn hãy trình bày 6 cấp độ dịch vụ dưới góc nhìn của khách hàng.
Theo bạn, bạn đang cung cấp dịch vụ đạt cấp độ nào, cho ví dụ về
hành động phục vụ của bản thân để đạt cấp độ đó và bạn làm gì để đạt
được cấp độ cao hơn?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["cấp", "dưới", "góc", "nhìn", "hàng", "đang", "cung", "đạt", "động", "bản"], category: "Dịch vụ & CSKH" },
  { id: 148, question: `(DV1.100) Bạn hãy trình bày khái niệm “Dịch vụ xuất sắc”
Bạn làm gì để bản thân (Tổ TV) luôn cung cấp dịch vụ xuất sắc trên
từng chuyến bay`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["khái", "niệm", "xuất", "sắc", "làm", "bản", "thân", "TV", "luôn", "cung"], category: "Dịch vụ & CSKH" },
  { id: 149, question: `(DV1.101) Bạn hãy trình bày cấp độ 5 trong 6 cấp độ dịch vụ, nêu những hành
động của TV ở cấp độ này và kể 1 câu chuyện mà bạn hoặc đồng
nghiệp đã phục vụ hành khách đạt được cấp độ này.`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["cấp", "động", "TV", "này", "câu", "chuyện", "đồng", "nghiệp", "đạt", "Tham"], category: "Dịch vụ & CSKH" },
  { id: 150, question: `(DV1.102) Bạn hãy trình bày cấp độ 1 trong 6 cấp độ dịch vụ, nêu ra những hành
động của TV ở cấp độ này và cách phòng ngừa, khắc phục của bạn`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["cấp", "động", "TV", "này", "cách", "phòng", "ngừa", "khắc", "Tham", "khảo"], category: "Dịch vụ & CSKH" },
  { id: 151, question: `(DV1.103) Bạn hãy trình bày cấp độ 2 trong 6 cấp độ dịch vụ, nêu ra những hành
động của TV ở cấp độ này và cách phòng ngừa, khắc phục của bạn`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["cấp", "động", "TV", "này", "cách", "phòng", "ngừa", "khắc", "Tham", "khảo"], category: "Dịch vụ & CSKH" },
  { id: 152, question: `(DV1.104) Bạn hãy trình bày cấp độ 3 trong 6 cấp độ dịch vụ, nêu ra những hành
động của TV ở cấp độ này và cách thức UP-SERVICE`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["cấp", "động", "TV", "này", "cách", "thức", "UP", "SERVICE", "Tham", "khảo"], category: "Dịch vụ & CSKH" },
  { id: 153, question: `(DV1.105) Bạn hãy trình bày cấp độ 4 trong 6 cấp độ dịch vụ, nêu hành động của
TV và kể 1 hành động mà bạn hoặc đồng nghiệp đã phục vụ khách
hàng đạt được cấp độ này`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["cấp", "động", "TV", "đồng", "nghiệp", "hàng", "đạt", "này", "Tham", "khảo"], category: "Dịch vụ & CSKH" },
  { id: 154, question: `(DV1.106) Bạn hãy trình bày cấp độ 6 trong 6 cấp độ dịch vụ, nêu những hành
động của TV ởcấp độnàyvàkể1 hành động màbạn hoặc đồng nghiệp
đã phục vụ khách hàng đạt được cấp độ này`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["cấp", "động", "TV", "ởcấp", "độnàyvàkể", "màbạn", "đồng", "nghiệp", "hàng", "đạt"], category: "Dịch vụ & CSKH" },
  { id: 155, question: `(DV1.107) Bạn hãy nêu 6 nhu cầu cơ bản của hành khách đi máy bay và phân tích
nhu cầu 1. TV phải làm gì để cung cấp nhu cầu này cho khách?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nhu", "cầu", "bản", "máy", "bay", "phân", "tích", "TV", "làm", "cung"], category: "Dịch vụ & CSKH" },
  { id: 156, question: `(DV1.108) Bạn hãy nêu 6 nhu cầu cơ bản của hành khách đi máy bay và phân tích
nhu cầu 2. TV phải làm gì để cung cấp nhu cầu này cho khách?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nhu", "cầu", "bản", "máy", "bay", "phân", "tích", "TV", "làm", "cung"], category: "Dịch vụ & CSKH" },
  { id: 157, question: `(DV1.109) Bạn hãy nêu 6 nhu cầu khách đi máy bay và phân tích nhu cầu 3. TV
phải làm gì để cung cấp nhu cầu này cho khách?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nhu", "cầu", "máy", "bay", "phân", "tích", "TV", "làm", "cung", "cấp"], category: "Dịch vụ & CSKH" },
  { id: 158, question: `(DV1.110) Bạn hãy nêu 6 nhu cầu cơ bản của hành khách đi máy bay và phân tích
nhu cầu 4. TV phải làm gì để cung cấp nhu cầu này cho khách?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nhu", "cầu", "bản", "máy", "bay", "phân", "tích", "TV", "làm", "cung"], category: "Dịch vụ & CSKH" },
  { id: 159, question: `(DV1.111) Bạn hãy nêu 6 nhu cầu cơ bản của hành khách đi máy bay và phân tích
nhu cầu 5. TV phải làm gì để cung cấp nhu cầu này cho khách?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nhu", "cầu", "bản", "máy", "bay", "phân", "tích", "TV", "làm", "cung"], category: "Dịch vụ & CSKH" },
  { id: 160, question: `(DV1.112) Bạn hãy nêu 6 nhu cầu cơ bản của hành khách đi máy bay và phân tích
nhu cầu 6. TV phải làm gì để cung cấp nhu cầu này cho khách?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nhu", "cầu", "bản", "máy", "bay", "phân", "tích", "TV", "làm", "cung"], category: "Dịch vụ & CSKH" },
  { id: 161, question: `(DV1.113) Bạn hãy trình bày 4 hạng mục giá trị.
Bạn hãy chọn 1 hạng mục giá trị và tự đánh giá bản thân đang cung
cấp hạng mục này ở cấp độ nào và vì sao?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["hạng", "mục", "giá", "trị", "chọn", "đánh", "bản", "thân", "đang", "cung"], category: "Dịch vụ & CSKH" },
  { id: 162, question: `(DV1.114) Bạn hãy trình bày về hạng mục giá trị “Sản phẩm chủ đạo”.
TV cung cấp cho khách ở hạng mục này ở cấp độ nào?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["hạng", "mục", "giá", "trị", "Sản", "phẩm", "chủ", "đạo", "TV", "cung"], category: "Dịch vụ & CSKH" },
  { id: 163, question: `(DV1.115) Bạn hãy trình bày về hạng mục giá trị “Sự thuận tiện”. TV cung cấp
cho khách ở hạng mục này ở cấp độ nào?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["hạng", "mục", "giá", "trị", "thuận", "tiện", "TV", "cung", "cấp", "này"], category: "Dịch vụ & CSKH" },
  { id: 164, question: `(DV1.116) Bạn hãy trình bày hiểu biết về hạng mục giá trị “Tư duy dịch vụ”.
TV cung cấp cho khách ở hạng mục này ở cấp độ nào?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["hiểu", "hạng", "mục", "giá", "trị", "duy", "TV", "cung", "cấp", "này"], category: "Dịch vụ & CSKH" },
  { id: 165, question: `(DV1.117) Bạn hãy trình bày hiểu biết về hạng mục giá trị “Phát triển mối quan
hệ”.
TV cung cấp cho khách ở hạng mục này ở cấp độ nào?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["hiểu", "hạng", "mục", "giá", "trị", "Phát", "triển", "mối", "quan", "TV"], category: "Dịch vụ & CSKH" },
  { id: 166, question: `(DV1.118) Bạn hãy trình bày nội dung cam kết số 2
Bạn nói lời cảm ơn khách khi nào?
Hãy nói câu cảm ơn khi chào khách lên máy bay`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "cảm", "câu", "chào", "lên"], category: "Dịch vụ & CSKH" },
  { id: 167, question: `(DV1.119) Bạn hãy trình bày nội dung cam kết số 2
Bạn nói lời cảm ơn khách khi nào?
Hãy nói câu cảm ơn khi khách chờ bạn làm nóng ly mì tôm`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "cảm", "câu", "chờ", "làm"], category: "Dịch vụ & CSKH" },
  { id: 168, question: `(DV1.120) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời cảm ơn khách khi nào?
Hãy nói câu cảm ơn khi khách thực hiện đề nghị của bạn, ví dụ đưa
khay thức ăn cho bạn thu`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "cảm", "câu", "thực", "hiện"], category: "Dịch vụ & CSKH" },
  { id: 169, question: `(DV1.121) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời cảm ơn khách khi nào?
Hãy nói câu cảm ơn khi khách trợ giúp ý tế cho khách khác`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "cảm", "câu", "trợ", "giúp"], category: "Dịch vụ & CSKH" },
  { id: 170, question: `(DV1.122) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khi khách góp ý món cơm thịt bò (cơm bị nát)?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "góp"], category: "Dịch vụ & CSKH" },
  { id: 171, question: `(DV1.123) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khoang khách có tiếng trẻ con khóc rất
to và khá lâu (5 phút)`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "khoang"], category: "Dịch vụ & CSKH" },
  { id: 172, question: `(DV1.124) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãynói câu xin lỗi khách khi chuyến baybị delaydo kiểm tra kỹthuật
máy bay tại TSN 30 phút (phát sinh sau khi khách đã lên tàu)`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "Hãynói", "câu"], category: "Dịch vụ & CSKH" },
  { id: 173, question: `(DV1.125) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách va xe vào chân khách, gây tím bầm`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "vào"], category: "Dịch vụ & CSKH" },
  { id: 174, question: `(DV1.126) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khách phàn nàn TV phát thanh kém,
không nghe rõ`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 175, question: `(DV1.127) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khách phàn nàn TV không niềm nở, vui
vẻ`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 176, question: `(DV1.128) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khách phàn nàn món ăn có vật lạ trong
salad cá hồi`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 177, question: `(DV1.129) Bạn hãy trình bày nội dung cam kết số 2.`, answer: `Cam kết số 2: TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch vụ một cách an toàn, an ninh và nhất quán.
* Nói lời cảm ơn khách khi: khách hỗ trợ cất hành lý, khách chờ đợi, khách thực hiện đề nghị của TV, khách trợ giúp y tế cho khách khác.
* Nói lời xin lỗi khách khi: có sự cố, sai sót trong phục vụ, delay, phàn nàn về dịch vụ.`, keywords: ["nội", "dung", "cam", "kết", "Tham", "khảo", "tài", "liệu"], category: "Dịch vụ & CSKH" },
  { id: 178, question: `(DV1.130) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khách phàn nàn chương trình giải trí
không có nhiều lựa chọn`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 179, question: `(DV1.131) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khách phàn nàn thức ăn, thức uống trên
chuyến bay ít thay đổi`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 180, question: `(DV1.132) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khách phàn nàn bỏ sót không phục vụ
khách khăn lau tay`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 181, question: `(DV1.133) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khách phàn nàn không có chỗ để hành
lý bên trên chỗ ngồi`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 182, question: `(DV1.134) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khách khi khách phàn nàn không có cà phê Cold
Brew trên chuyến bay`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 183, question: `(DV1.135) Bạn hãy trình bày nội dung cam kết số 2.
Bạn nói lời Xin lỗi khách khi nào?
Hãy nói câu xin lỗi khi khách phàn nàn có ít lựa chọn rượu vang trên
chuyến bay? Khách thích rượu Vang đỏ Bordeaux – 2012?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["nội", "dung", "cam", "kết", "nói", "lời", "Xin", "lỗi", "câu", "phàn"], category: "Dịch vụ & CSKH" },
  { id: 184, question: `(DV1.136) Kỹ năng quan sát hiệu quả đóng vai trò như thế nào trong việc thực
hiện cam kết 5?
Bạn hãy cho ví dụ về việc vận dụng kỹ năng quan sát hiệu quả để thực
hiện cam kết 5.`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["Kỹ", "năng", "quan", "sát", "hiệu", "quả", "đóng", "vai", "trò", "thế"], category: "Dịch vụ & CSKH" },
  { id: 185, question: `(DV1.137) Nếu thực hiện được cam kết 5, bạn sẽ mang lại cảm xúc cho khách
hành ở cấp độ mấy? Vì sao?
Hãy đưa ra một ví dụ mà bạn thực hiện cam kết 5 vào thời điểm tạm
biệt khách?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["thực", "hiện", "cam", "kết", "mang", "lại", "cảm", "xúc", "cấp", "mấy"], category: "Dịch vụ & CSKH" },
  { id: 186, question: `(DV1.138) TV hãy nêu 4 hạng mục giá trị theo ngôn ngữ dịch vụ chung của
VNA?.
Từng hạng mục giá trị, TV hãy nêu 1 ví dụ mà TV đã thực hiện và
đánh giá dịch vụ đó ở cấp độ nào.`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["TV", "hạng", "mục", "giá", "trị", "ngôn", "ngữ", "chung", "VNA", "Từng"], category: "Dịch vụ & CSKH" },
  { id: 187, question: `(DV1.139) Trong lúc hiện diện trong khoang khách, TV quan sát và nhận thấy
khách co ro/xoa người (khách bị lạnh).
TV chủ động thực hiện những hành động nào để nâng tầm dịch vụ lên
cấp độ đáng ngạc nhiên?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["lúc", "hiện", "diện", "khoang", "TV", "quan", "sát", "nhận", "thấy", "xoa"], category: "Dịch vụ & CSKH" },
  { id: 188, question: `(DV1.140) Bạn hãy cho biết:
- Khái niệm về dịch vụ theo ngôn ngữ dịch vụ chung của Vietnam
Airlines?
- Ba (3) yếu tố: hành động, giá trị, người khác đều quan trọng nhưng
chúng ta cần quan tâm yếu tố nào trước?
- Tài liệu tra cứu “khái niệm về dịch vụ”.`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["Khái", "niệm", "ngôn", "ngữ", "chung", "Vietnam", "Airlines", "yếu", "động", "giá"], category: "Dịch vụ & CSKH" },
  { id: 189, question: `(DV1.141) Bạn hãy cho biết:
-Khái niệm về dịch vụ theo ngôn ngữ dịch vụ chung của Vietnam
Airlines?
-Những “Hành động tạo ra giá trị” khi đón khách lên máy bay
- Tài liệu tra cứu khái niệm về dịch vụ`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["Khái", "niệm", "ngôn", "ngữ", "chung", "Vietnam", "Airlines", "động", "tạo", "giá"], category: "Dịch vụ & CSKH" },
  { id: 190, question: `(DV1.142) Bạn hãy cho biết Nguyên tắc hành động số 1 là gì?`, answer: `Nguyên tắc hành động số 1:
Tôi đặc biệt chú ý đến ngoại hình, ngôn ngữ và thái độ tích cực khi giao tiếp với đồng nghiệp và đối tác.`, keywords: ["Nguyên", "tắc", "động", "Tham", "khảo", "tài", "liệu"], category: "Dịch vụ & CSKH" },
  { id: 191, question: `(DV1.143) Bạn hãy cho biết Nguyên tắc hành động số 2 là gì?`, answer: `Nguyên tắc hành động số 2:
Tôi cam kết rằng TÔI CÓ THỂ (và tôi SẼ) chịu trách nhiệm cá nhân cho những hành động, quyết định, kết quả của mình và làm gương để cung cấp dịch vụ một cách an toàn, an ninh và nhất quán.`, keywords: ["Nguyên", "tắc", "động", "Tham", "khảo", "tài", "liệu"], category: "Dịch vụ & CSKH" },
  { id: 192, question: `(DV1.144) Bạn hãy cho biết Nguyên tắc hành động số 3 là gì?`, answer: `Nguyên tắc hành động số 3:
Tôi cam kết góp phần tạo dựng môi trường làm việc tích cực, dung hợp và cởi mở trong các mối quan hệ.`, keywords: ["Nguyên", "tắc", "động", "Tham", "khảo", "tài", "liệu"], category: "Dịch vụ & CSKH" },
  { id: 193, question: `(DV1.145) Bạn hãy cho biết Nguyên tắc hành động số 4 là gì?`, answer: `Nguyên tắc hành động số 4:
Tôi tự hào là một phần của ngôi nhà Vietnam Airlines, liên tục cải thiện bản thân và luôn nỗ lực hướng tới sự xuất sắc.`, keywords: ["Nguyên", "tắc", "động", "Tham", "khảo", "tài", "liệu"], category: "Dịch vụ & CSKH" },
  { id: 194, question: `(DV1.146) Bạn hãy cho biết Nguyên tắc hành động số 5 là gì?`, answer: `Nguyên tắc hành động số 5:
Tôi nhận ra rằng suy nghĩ, cảm xúc và hoàn cảnh của người khác cũng quan trọng như chính mình và sẽ cố gắng hết sức lắng nghe, thấu hiểu, đồng cảm, chia sẻ và giúp đỡ người khác trong công việc và cuộc sống.`, keywords: ["Nguyên", "tắc", "động", "Tham", "khảo", "tài", "liệu"], category: "Dịch vụ & CSKH" },
  { id: 195, question: `(DV2.1) Hành khách đã đặt suất ăn đặc biệt (VGML) nhưng không được cấp
lên c/bay, TV cần xử lý như thế nào?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["đặt", "suất", "đặc", "biệt", "VGML", "nhưng", "cấp", "lên", "bay", "TV"], category: "Dịch vụ & CSKH" },
  { id: 196, question: `(DV2.2) Để phục vụ khách xuống máy bay khi khai thác các tàu bay thân rộng
(B787-9, B787-10, A350) không sử dụng cửa L1, trên chuyến bay,
Tiếp viên thực hiện các công việc gì?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["xuống", "máy", "bay", "khai", "thác", "tàu", "thân", "rộng", "B787", "A350"], category: "Dịch vụ & CSKH" },
  { id: 197, question: `(DV2.3) Để phục vụ khách VIP1 xuống máy bay khi khai thác các tàu bay thân
rộng (B787-9, B787-10, A350) không sử dụng cửa L1, trên chuyến
bay, Tiếp viên thực hiện các công việc gì?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["VIP1", "xuống", "máy", "bay", "khai", "thác", "tàu", "thân", "rộng", "B787"], category: "Dịch vụ & CSKH" },
  { id: 198, question: `(DV2.4) Để phối hợp đảm bảo nhiệt độ khoang khách phục vụ các chuyến bay
mùa nắng nóng, Tiếp viên cần thực hiện các việc gì?
(thời điểm: trước khi boarding, trong lúc boarding, máy bay trên
đường lăn)`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["phối", "hợp", "đảm", "bảo", "nhiệt", "khoang", "bay", "mùa", "nắng", "nóng"], category: "Dịch vụ & CSKH" },
  { id: 199, question: `(DV2.5) Anh/chị hãy trình bày nội dung và cách vận dụng các nguyên tắc
chung kỹ năng phục vụ hạng Thương gia?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["Anh", "chị", "nội", "dung", "cách", "vận", "dụng", "nguyên", "tắc", "chung"], category: "Dịch vụ & CSKH" },
  { id: 200, question: `(DV2.6) Khi thấy khách có biểu hiện khác thường về sức khỏe: bị nôn/ ói, da
mặt xanh xao…, TV cần xử lý như thế nào?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["thấy", "biểu", "hiện", "khác", "thường", "sức", "khỏe", "nôn", "mặt", "xanh"], category: "Dịch vụ & CSKH" },
  { id: 201, question: `(DV2.7) TV phục vụ sơ ý đẩyxe phục vụ đồ uống/ suất ănđụng vào chân khách,
TV cần xử lý như thế nào?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["TV", "đẩyxe", "uống", "suất", "ănđụng", "vào", "chân", "cần", "thế", "Tham"], category: "Dịch vụ & CSKH" },
  { id: 202, question: `(DV2.8) TV cần xử lý như thế nào khi đang phục vụ khách thức uống có cồn
nhưng nhận thấy khách có dấu hiệu say rượu?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["TV", "cần", "thế", "đang", "thức", "uống", "cồn", "nhưng", "nhận", "thấy"], category: "Dịch vụ & CSKH" },
  { id: 203, question: `(DV2.9) Quy định số lượng, trọng lượng chuyên chở PETC?
Quy trình quản lý, TV cần lưu ý gì trên chuyến bay có chuyên chở
PETC?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["Quy", "định", "lượng", "trọng", "chuyên", "chở", "PETC", "quản", "TV", "cần"], category: "Dịch vụ & CSKH" },
  { id: 204, question: `(DV2.10) Hãy nêu các bước TV phải thực hiện khi có khách bị khó thở phải sử
dụng bình oxy?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["bước", "TV", "thực", "hiện", "khó", "thở", "dụng", "bình", "oxy", "Tham"], category: "Dịch vụ & CSKH" },
  { id: 205, question: `(DV2.11) TV hãy cho biết quy trình phục vụ khách UM (từ 6 tuổi trở lên đến
dưới 12 tuổi) như thế nào?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["TV", "quy", "UM", "tuổi", "trở", "lên", "dưới", "thế", "Tham", "khảo"], category: "Dịch vụ & CSKH" },
  { id: 206, question: `(DV2.12) TV hãy giới thiệu và trình bày cách thức phục vụ Welcome drink trên
chuyến bay VNA?
- Các bước chuẩn bị?
- Phục vụ Welcome drink chuyến bay đường ngắn? Đường trung/dài?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["TV", "giới", "thiệu", "cách", "thức", "Welcome", "drink", "bay", "VNA", "bước"], category: "Dịch vụ & CSKH" },
  { id: 207, question: `(DV2.13) TV hãy nêu cách thức pha café phin giấy trên máy bay?`, answer: `* Xé gói café phin giấy, mở nắp ly
* Đặt phin giấy lên miệng ly
* Rót nước sôi từ từ vào phin giấy, đợi nước chảy hết qua phin
* Có thể rót thêm nước sôi nếu khách muốn café loãng hơn
* Bỏ phin giấy sau khi pha xong
* Phục vụ kèm đường, sữa theo yêu cầu khách`, keywords: ["TV", "cách", "thức", "pha", "café", "phin", "giấy", "máy", "bay", "Tham"], category: "Dịch vụ & CSKH" },
  { id: 208, question: `(DV2.14) Khi khách liên hệ với TV và yêu cầu được dùng thuốc trong hộp thuốc
cứu thương trên máy bay, TV phục vụ phải làm gì?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["liên", "TV", "yêu", "cầu", "dùng", "thuốc", "hộp", "cứu", "thương", "máy"], category: "Dịch vụ & CSKH" },
  { id: 209, question: `(DV2.15) Nhằm giảm thiểu tình trạng khách bị ngã cầu thang khi xuống tàu bay,
Tiếp viên phải thực hiện các nội dung công việc gì?`, answer: `(Tham khảo tài liệu Dịch vụ)`, keywords: ["Nhằm", "giảm", "thiểu", "tình", "trạng", "ngã", "cầu", "thang", "xuống", "tàu"], category: "Dịch vụ & CSKH" },
];