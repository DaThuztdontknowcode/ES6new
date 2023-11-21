const birds = [
    {"ID": "DV8", "Name": "Eurasian Collared-Dove", "Type": "Dove" },
    {"ID": "HK12", "Name": "Bald Eagle", "Type": "Hawk" },
    {"ID": "HK6", "Name": "Cooper's Hawk", "Type": "Hawk" },
    {"ID": "SP11", "Name": "Bell's Sparrow", "Type": "Sparrow" },
    {"ID": "DV2", "Name": "Mourning Dove", "Type": "Dove" }
];

// Tạo một đối tượng để lưu trữ mã khoa học của từng loài chim dựa trên loại
const scientificNames = {};

// Lặp qua mảng để xây dựng đối tượng scientificNames
birds.forEach(bird => {
    // Kiểm tra xem loại chim đã được thêm vào đối tượng chưa
    if (!scientificNames[bird.Type]) {
        scientificNames[bird.Type] = [];
    }
    // Thêm mã khoa học của loài chim vào mảng tương ứng
    scientificNames[bird.Type].push(bird.ID);
});

// In ra mã khoa học của từng loại chim
for (const [birdType, scientificIDs] of Object.entries(scientificNames)) {
    console.log(`Loại chim: ${birdType}, Mã khoa học: ${scientificIDs.join(', ')}`);
}
