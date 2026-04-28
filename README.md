#  React Alışveriş Listesi Uygulaması

Bu proje, React ve modern JavaScript (ES6+) teknikleri kullanılarak geliştirilmiş, etkileşimli bir **Alışveriş Listesi** uygulamasıdır. Proje; bileşen tabanlı mimari, state (durum) yönetimi ve proplar gibi temel React kavramlarını uygulamalı olarak göstermektedir.

##  Özellikler

- **Ürün Ekleme:** Listeye dinamik olarak yeni elemanlar ekleyin.
- **Tamamlandı İşaretleme:** Aldığınız ürünleri checkbox ile işaretleyerek üzerini çizin.
- **Ürün Silme:** Artık ihtiyaç duymadığınız ürünleri listeden kaldırın.
- **Gelişmiş Filtreleme:**
  - **Hepsi:** Tüm listeyi görüntüleyin.
  - **Tamamlananlar:** Sadece işaretlenmiş ürünleri görün.
  - **Tamamlanmayanlar:** Alınacaklar listesine odaklanın.
- **Listeyi Temizle:** Tek tıkla tüm listeyi sıfırlayın.

## Bileşen Yapısı (Component Structure)

Uygulama, sürdürülebilir ve tekrar kullanılabilir şu bileşenlerden oluşmaktadır:

- **Header:** Uygulama başlığını gösterir.
- **AddItemForm:** Yeni ürün ekleme formunu yönetir.
- **FilterButtons:** Filtreleme butonlarını ve "Temizle" işlevini kontrol eder.
- **ListItems:** Filtrelenmiş listeyi render eder.
- **Item:** Her bir alışveriş ürününü temsil eder (Silme ve tamamlama işlemleri burada yönetilir).
- **NoItem:** Liste boş olduğunda kullanıcıya bilgi verir.

##  Kullanılan Kavramlar

- React Fonksiyonel Bileşenler (Functional Components)
- **useState** Hook (State Yönetimi)
- **Props** (Bileşenler arası veri aktarımı)
- Koşullu Render (Conditional Rendering)
- Key kullanarak Liste Render İşlemi
- Olay Yönetimi (Event Handling)

##  Teknolojiler

- **React** (Vite altyapısıyla)
- **Bootstrap 5** (Tasarım için)
- **Bootstrap Icons** (Simgeler için)
- **JavaScript (ES6+)**

##  Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için:

```bash
git clone https://github.com/kullanici-adin/shopping-list-app.git
cd shopping-list-app
npm install
npm run dev
```
   
##  Canlı Demo
 Yakında eklenecek

## Gelecek Geliştirmeler
- LocalStorage ile veri kalıcılığı
- Sürükle & bırak (drag & drop) özelliği
- Ürün düzenleme (edit) özelliği
- Daha gelişmiş responsive tasarım

##  Geliştirici

Bu proje, React öğrenme sürecimde geliştirilmiş olup temel kavramları uygulamalı olarak pekiştirmek amacıyla hazırlanmıştır.