import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SlidePage } from '../../pages/slide/slide';
import { Website } from '../../providers/website/website';

/*
  Generated class for the PrepPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/prep/prep.html',
})
export class PrepPage {
  webSite: any;
  operators: any;
  ads: any;
  constructor(private nav: NavController, webSite: Website) {
    this.nav = nav;
    this.webSite = webSite;
    this.operators = '';
    this.ads = '';
    this.getListOperators();
    this.getAds();
  }
  // http://masjid.ru/api/get_post/?post_id=244



  getListOperators() {
    this.webSite.getListOperators()
      .then(data => {
        this.operators = data;
        if (this.operators.length <= 5) {
          this.operators = '';
        }
      }, error => {

      });
  }

getAds() {
    this.webSite.getAds()
      .then(data => {
        this.ads = data;
        console.log(data);
        if (this.ads.length <= 5) {
           console.log('length <= 5');
          this.ads = '';
        }
      }, error => {
      });
  }


  openDocs() {
    let dua = {
      name: 'Маленькая сумка',
      image: '',
      text: '1. Билет на самолет<br>2. Копию паспорта и визы (также сфотографируйте их на телефон)<br>3. Сертификат шахады (если вы обращенный в ислам в немусульманской стране)<br>4. Адрес отеля (на английском и арабском)<br>5. Наличные деньги (ориентируйтесь на 500$ на человека)<br>6. Лекарства<br>7. Очки, контактные линзы <br><br><b>Важно!</b> Внимательно следите за ценными вещами во время тавафа и в местах скопления людей - активно орудуют карманники'
    };
    this.nav.push(SlidePage, dua);
  }

  openClothes() {
    let dua = {
      name: 'Одежда',
      image: '',
      text: 'Нижнее белье, бейсболка, брюки, абайа, хиджаб, теплые носки, кофта, сандалии, кроссовки'
    };
    this.nav.push(SlidePage, dua);
  }

  openGigiena() {
    let dua = {
      name: 'Средства гигиены',
      image: '',
      text: '  Полотенце для рук<br>  Мыло, шампунь<br>  Мочалка <br>  Туалетная бумага<br>  Зубная щетка и зубная паста<br>  Солнцезащитный крем <br>  Хирургическая маска <br>  Необходимые медикаменты, обезболивающие, набор скорой помощи (обязательно пластырь, бинт, смекта)<br>  Бумажные салфетки<br>  Лосьон без запаха, присыпка или вазелин<br>  Бальзам для губ<br>  Ножницы <br>  Бритва <br>  Зеркало, расчёска, прокладки (для женщин)'
    };
    this.nav.push(SlidePage, dua);
  }


  openFood() {
    let dua = {
      name: 'Еда',
      image: '',
      text: 'Сухофрукты, орехи, батончики, печенье, казы<br>Бутылочку с водой'
    };
    this.nav.push(SlidePage, dua);
  }


  openAdd() {
    let dua = {
      name: 'Дополнительно',
      image: '',
      text: ' Зонтик от солнца <br> Руководство хаджа, маленькую копию Корана, книги с дуа (можно использовать данное приложение для телефона)<br> Фонарик (есть во многих телефонах)<br>  Молитвенный коврик<br> Иголка, нитки, булавка<br> Кружка, ложка, вилка, нож, тарелка, кипятильник <br> Телефон, зарядник (удлинитель, переходник с 3-х фазной розетки)<br> Ручные весы<br> Телефон<br> Беруши (для удобства сна в Мине) <br> В целом, все вещи можно купить на месте в Мекке или Медине'
    };
    this.nav.push(SlidePage, dua);
  }


  openSabr() {
    let dua = {
      name: 'Запаситесь терпением!',
      image: 'build/img/sabr.jpg',
      text: 'В первую очередь мы должны проявить терпение в поклонении Всевышнему Аллаху, совершая обряды хаджа. <br>Начиная с вступления в хадж, делая обход вокруг Каабы, где собрались сотни тысяч мусульман, где могут и толкнуть, и уколоть, и наступить на ногу. В любом случае, следует проявлять терпение и не переходить за рамки Шариата. <br>Терпение следует проявить и во время умры, когда ночуем в долине Мина, когда находимся на Арафате под палящим солнцем, когда приходится сидеть на голой земле в Муздалифа, когда приходится несколько километров идти пешком для бросания камушков. Терпение необходимо проявлять, отправляясь на каждый намаз в мечеть. <br>Терпение необходимо также проявить и в отказе от грехов. Порою хочется совершить какой-то грех, оскорбить кого-то, поругаться, ударить, толкнуть, пройти без очереди, заняться бесполезным, посмотреть на греховное, провести время в ненужных разговорах. Поэтому надо, проявив терпение, отказаться от всего греховного. <br>Паломники также проявляют терпение в связи с разлукой с родными. Надо осознавать, что мы расстаемся с родными с целью поклонения Всевышнему, поминания Его, выполнения обязанности возложенного Им хаджа. <br>Хотя мы тратим огромные средства на совершение хаджа, нельзя жаловаться на расходы, ведь Всевышний Аллах в Коране сказал:<br>وما أنفقتم من شيء فهو يخلفه وهو خير الرازقين سبأ <br><strong>«Он возместит все, что бы вы ни израсходовали. Он — Наилучший из дарующих удел»</strong> (сура Сабаъ, 39). <br><br>При перемещениях из города в город, от одного места совершения обрядов к другим местам, при трудностях дороги необходимо проявлять терпение, ибо этот путь является путем джихада. Посланник Аллаха (мир ему и благословение) сказал:<br>الحج جهاد كل ضعيف" رواه ابن ماجه <br><strong>«Хадж — это джихад слабых» </strong>(Ибн Маджа). <br><br>Быть может так, что паломник заболеет, получит увечья, травмы. Ни в коем случае нельзя жаловаться на кого-то, винить, думать, что лучше было бы остаться дома. Пророк (мир ему и благословение Аллаха) сказал:<br>ما يصيب المسلم من نصب ولا وصب ولا هم ولا حزن ولا أذى ولا غم حتى الشوكة يشاكها إلا كفر الله بها من خطاياه <br><strong>«То, что постигает мусульманина, будь это усталость, болезнь, озабоченность, печаль, вред или горечь, даже укол колючки, является искуплением его грехов от Аллаха»</strong> (Бухари и Муслим).<br><br>Кроме упомянутых, могут быть и другие ситуации, когда необходимо проявлять терпение. Проявляя терпение, мы попадем в число тех, о которых сказал Всевышний Аллах:<br>وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِّنَ الْخَوفْ وَالْجُوعِ وَنَقْصٍ مِّنَ الأَمَوَالِ وَالأنفُسِ وَالثَّمَرَاتِ وَبَشِّرِ الصَّابِرِينَ (155) الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُواْ إِنَّا لِلّهِ وَإِنَّـا إِلَيْهِ رَاجِعونَ (156) أُولَـئِكَ عَلَيْهِمْ صَلَوَاتٌ مِّن رَّبِّهِمْ وَرَحْمَةٌ وَأُولَـئِكَ هُمُ الْمُهْتَدُونَ (157) <br><strong>«Мы непременно испытаем вас незначительным страхом, голодом, потерей имущества, людей и плодов. Обрадуй же терпеливых, которые, когда их постигает беда, говорят: «Воистину, мы принадлежим Аллаху, и к Нему мы вернемся». Они удостаиваются благословения своего Господа и милости. Они следуют прямым путем» </strong>(Сура «Аль-Бакара», 155-157). <br><br>Знайте, что у каждой вещи есть своя суть, а суть имана не постигнет раб Аллаха, пока не будет видеть во всем предопределение Аллаха. Что постигло нас, то не должно было миновать, а что миновало, то не должно было постигнуть. <br>Необходимо иметь хорошее мнение о Всевышнем Аллахе, чтобы с нами ни случилось. Поистине, Он воздаст нам наилучшим, если мы проявим терпение. Посланник Аллаха (мир ему и благословение) сказал:<br>عجباً لأمر المؤمن إن أمره كله خير ، وليس ذاك لأحد إلا للمؤمن ، إن أصابته سرَّاء شكر فكان خيراً له ، وإن أصابته ضرَّاء صبر فكان خيراً له " أخرجه مسلم . <strong>«Удивительно положение верующего. Во всем есть благо для верующего, и нет подобного никому, кроме верующих. Если верующий пребудет в радости, он благодарит Аллаха, и в этом будет для него благо. Если же постигнет его вред, верующий проявляет терпение, и в этом будет благо для него»</strong> (Имам Муслим).<br><br><strong>Важно!</strong> Во время всей поездки к вам будет приставлен руководитель, и вы обязаны его слушаться. Если у вас есть желание совершить какую-либо сунну Хаджа, но руководитель говорит этого не делать - слушайте руководителя.'
    };
    this.nav.push(SlidePage, dua);
  }


}
