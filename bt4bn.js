class SoThu {
  constructor() {

    this.danhSachDongVat = new Map();
  }


  themDongVat(ten, loai, moTa) {
    this.danhSachDongVat.set(ten, { loai, moTa });
  }


  getThongTinDongVat(ten) {
    return this.danhSachDongVat.get(ten);
  }


  capNhatThongTinDongVat(ten, loai, moTa) {
    if (this.danhSachDongVat.has(ten)) {
      this.danhSachDongVat.set(ten, { loai, moTa });
      console.log(`Đã cập nhật thông tin cho ${ten}`);
    } else {
      console.log(`Không tìm thấy động vật có tên là ${ten}`);
    }
  }
}


const Peterzoo = new SoThu();


Peterzoo.themDongVat("Hổ", "Thú rừng", "Là loài thú mạnh mẽ và linh hoạt");
Peterzoo.themDongVat("Gấu", "Thú rừng", "Là loài thú có bộ lông dày");


const tigerinfo = Peterzoo.getThongTinDongVat("Hổ");
console.log(tigerinfo);


Peterzoo.capNhatThongTinDongVat("Hổ", "Thú rừng", "Là loài thú mạnh mẽ và linh hoạt, thích sống đơn độc");


const updatetigerinfo = Peterzoo.getThongTinDongVat("Hổ");
console.log(updatetigerinfo);
