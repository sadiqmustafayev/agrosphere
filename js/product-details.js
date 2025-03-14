const products = {
  1: { 
      title: "Ormus Ozot", 
      description: "Ormus Azot gübrəsi bitkilərdə yaşıllığı artırmaqla yanaşı şəkərin, nişastanın, yağların, zülalların və vitaminlərin miqdarını da artırır. Torpağın strukturuna təsir etməklə, torpaq məhlulunun reaksiyasını, mikrobioloji prosesləri yaxşılaşdırmaqla torpaq münbitliyinin artmasında aktiv iştirak edir. Bitkilərin generativ orqanlarının inkşafını stimullaşdırır. Tərkibindəki Dəmir (Fe), Sink (Zn), Manqan (Mn) və Bor (B), Molibden (Mo) kimi mikroelementlə bitkilərin xəstəliklərə qarşı müqavimətini artırır.",

      price: "20", 
      origin: "Türkiyə", 
      usage: "Bitkilərə uyğun dozada torpağa əlavə edin.", 
      image: "img/product1.jpg"
  },
  2: { 
      title: "Agree's Azot Kalium", 
      description: "Agrees Azot Kalium yüksək azot tərkibli və xelat formada olan mikroelementlər ilə zənginləşdirilmiş (bitkilər tərəfindən asanlıqla həzm olunur) maye kompleks mineral gübrədir. Preparatın üstünlükləri: - Bitkinin uzunmüddətli qidalanmasını təmin edir (2-3 həftəyə qədər). - Sünbül bitkilərinin taxılın keyfiyyətini artırır (zülal, öz tərkibini artırır, xüsusiyyətlərini yaxşılaşdırır). - Mikrogübrələrin istifadəsi azot gübrələrinin (ammonium nitrat, karbamid və s.) alınmasına qənaət etməyə imkan verir. - Fotosintetik prosesləri aktivləşdirir, böyümə hormonlarının daha güclü istehsalına imkan yaradır (bitkinin öz böyümə faktorları ilə). - Amin turşusu və protein struktur sıralarının sintezində iştirak edir. Gübrə bütün əsas kənd təsərrüfatı bitkiləri üçün nəzərdə tutulmuşdur. Bitkilərin vegetasiya dövründə, buğdanın 3 yarpaq mərhələsində istifadə olunur. Məhsulda azotun 3 forması mövcuddur: amid, ammonium, nitrat. Azotun amid forması yarpaqlar tərəfindən qəbul edilir. Temperatur və rütubətdən asılı olaraq 1 gündən 4 günə qədər müddətə mənimsənilir. Azotun ammonium forması nitrat formasına çevrilir. Azotun nitrat forması temperatur və rütubətdən asılı olaraq 1 həftədən 6 həftəyə qədər qəbul edilir.",
      price: "25", 
      origin: "Azərbaycan", 
      usage: "İstifadə qaydası paket üzərində qeyd olunub.", 
      image: "img/product2.jpg"
  },
  3: { 
      title: "Relikt P", 
      description: "Relikt P humin və fulvo turşuların duzlarına əsaslanan, bitkilərin böyüməsini stimullaşdıran, adaptogen və qoruyucu xüsusiyyətlərə malik müasir ekoloji cəhətdən təmiz və təhlükəsiz preparatdır. Onun fəaliyyət prinsipi bitki orqanizminin təbii stimullaşdırılması və onda baş verən bütün bioloji proseslərin yaxşılaşdırılmasıdır. Preparat əvvəlcə hüceyrələrə, sonra bitki toxumasına təsir göstərir. Beləliklə, Relikt P bioenergetik prosesləri aktivləşdirir, maddələr mübadiləsini stimullaşdırır, qida maddələrinin hüceyrə membranından keçməsini, ferment sisteminin fəaliyyətini yaxşılaşdırır, bitkilərin stressə qarşı (temperatur, quraqlıq, duzluluq   və  pestisidlərin tətbiqi ilə bağlı stresslər ) davamlılığını artırır.", 
      price: "18", 
      origin: "Rusiya", 
      usage: "İstifadə qaydası təlimatda göstərilib.", 
      image: "img/product3.jpg"
  }
};

// URL-dən məhsul ID-sini oxumaq
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Məhsul məlumatlarını göstərmək
if (products[productId]) {
  document.getElementById("product-title").textContent = products[productId].title;
  document.getElementById("product-description").textContent = products[productId].description;
  document.getElementById("product-price").textContent = products[productId].price;
  document.getElementById("product-origin").textContent = products[productId].origin;
  document.getElementById("product-usage").textContent = products[productId].usage;
  document.getElementById("product-image").src = products[productId].image;
} else {
  document.body.innerHTML = "<h1>Məhsul tapılmadı</h1>";
}