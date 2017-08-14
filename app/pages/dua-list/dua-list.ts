import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DuaPage } from '../../pages/dua/dua';

/*
  Generated class for the DuaListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/dua-list/dua-list.html',
})
export class DuaListPage {

  duaList: Array<{}>;
  constructor(private navCtrl: NavController) {
    this.duaList = [
     {
      name: 'Вхождение в состояние ихрама (Умра)',
      arabic: 'لبيك اللهم بعمرة',
      addition: 'Произнесите данное дуа при вхождении в состояние ихрама перед Умрой',
      rus: 'Вот я пред Тобой, о Аллах, совершая ‘умру',
      trascription: 'Ляббай-ка Ллахумма би-‘умра'
    }
    ,  {
      name: 'После вхождения в ихрам (Умра)',
      arabic: 'اللهم هذه عمرة لا رياء فيها ولا سمعة',
      addition: 'Обратитесь лицом к кибле и произнесите данное дуа',
      rus: 'О Аллах, эта ‘умра — нет в ней показухи и стремления к славе!',
      trascription: 'Аллахумма хазихи ‘умра ля рийа’ фи-ха ва ля сум‘а'
    }
    , {
      name: 'Тальбия',
      arabic: 'لبيك اللهم لبيك لبيك لا شريك لك لبيك إنالحمد والنعمة لك والملك لا شريك لك',
      addition: 'Тальбию произносят в течение путешествия. Мужчины - вслух, женщины - тихо. Достигнув заповедной территории Мекки и увидев дома Мекки, следует прекратить произносить тальбию.',
      rus: 'Вот я пред Тобой, о Аллах! Вот я пред Тобой! Вот я пред Тобой, и нет у Тебя сотоварища! Вот я пред Тобой! Поистине, Тебе надлежит похвала и Тебе принадлежит милость и владычество! Нету Тебя сотоварища!',
      trascription: 'Ляббай-ка Ллахумма ляббай-ка! Ляббай-ка ля шарика ля-ка ляббай-ка! Инна ль-хамда ва ни‘мата ля-ка ва-ль-мульк ля шарика ля-ка'
    }
    , {
      name: 'При входе в Заповедную мечеть',
      arabic: 'اللهم صل على محمد وسلم اللهم افتح لي أبوابرحمتك',
      addition: 'Войдя в Заповедную мечеть с правой ноги, скажите данное дуа',
      rus: 'О Аллах, благослови Мухаммада и ниспошли ему мир! О Аллах, открой для меня врата Своего милосердия!',
      trascription: 'Аллахумма, салли ‘аля Мухаммадин ва саллим! Аллахумма, ифтах ли абваба рахмати-ка!'
    }
    ,{
      name: 'Раббана-атина',
      arabic: 'ربنا آتنا في الدنيا حسنة، و في الآخرة حسنة، و قنا عذاب النار',
      addition: 'Всякий раз, проходя между йеменским углом и Чёрным камнем, скажите данное дуа',
      rus: '«Господь наш! Одари нас добром в этом мире и добром в Последней жизни и защити нас от мучений в Огне!» (сура 2 «Аль-Бакара = Корова», аят 201).',
      trascription: 'Рабба-на, ати-на фи д-дунья хасанатан ва фи-ль-ахирати хасанатан ва-кы-на азаба н-нар'
    }
    , {
      name: 'У места Ибрахима',
      arabic: 'وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلّىً',
      addition: 'Направьтесь к месту стояния Ибрахима и произнесите данное дуа',
      rus: '«Изберите же место [стояния] Ибрахима местом моления» (сура 2 «Аль-Бакара = Корова», аят 125)',
      trascription: 'Ва тахизу мим маками Ибрахима мусалля'
    }
    , {
      name: 'Аль-Фатиха',
      arabic: ' بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ  (1)<br> الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ  (2)<br> الرَّحْمنِ الرَّحِيمِ  (3)<br> مَالِكِ يَوْمِ الدِّينِ  (4)<br> إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ  (5)<br> اهدِنَا الصِّرَاطَ المُستَقِيمَ  (6)<br> صِرَاطَ الَّذِينَ أَنعَمتَ عَلَيهِمْ غَيرِ المَغضُوبِ عَلَيهِمْ وَلاَ الضَّالِّينَ  (7)',
      addition: 'Первая сура в каждом ракаате каждого намаза',
      rus: ' 1. Во имя Аллаха, Милостивого, Милосердного! <br> 2. Хвала Аллаху, Господу миров, <br> 3. Милостивому, Милосердному, <br> 4. Властелину Дня воздаяния! <br> 5. Тебе одному мы поклоняемся и Тебя одного молим о помощи. <br> 6. Веди нас прямым путем, <br> 7. путем тех, кого Ты облагодетельствовал, не тех, на кого пал гнев, и не заблудших.',
      trascription: ' 1. бисмил-ляяhир-рах̣маанир-рах̣ииим <br> 2. аль-х̣амдулил-ляяhираббиль-ʿаалямииин <br> 3. ар-рах̣маанир-рах̣ииим <br> 4. мяялики-йауумид-дииин <br> 5. иййяякя-наʿбуду-ваий-йяякя-настаʿииин <br> 6. иhдинас̣-с̣ыраат̣аль-мустак̣ыыым <br> 7. с̣ыраатал-ляз̱иина-анʿамта-ʿалаййhим-г̣аййриль-магд̣ууби-ʿалаййhим-ва-ляд̣-д̣аааллииин '
    }
    , {
      name: 'Аль-Кяфирун',
      arabic: 'بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ<br> قُلْ يَا أَيُّهَا الْكَافِرُونَ  (1)<br> لَا أَعْبُدُ مَا تَعْبُدُونَ  (2)<br> وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ  (3)<br> وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ  (4)<br> وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ  (5)<br> لَكُمْ دِينُكُمْ وَلِيَ دِينِ  (6)',
      addition: 'Рекомендуется читать в 1-м ракаате намаза за местом Ибрахима',
      rus: 'Во имя Аллаха Милостивого, Милосердного!<br> 1. Скажи: "О неверующие! <br> 2. Я не поклоняюсь тому, чему поклоняетесь вы, <br> 3. а вы не поклоняетесь Тому, Кому поклоняюсь я. <br> 4. Я не поклоняюсь так, как поклоняетесь вы (или тому, чему поклоняетесь вы), <br> 5. а вы не поклоняетесь так, как поклоняюсь я (или Тому, Кому поклоняюсь я). <br> 6. Вы исповедуете свою религию, а я исповедую свою!" ',
      trascription: 'бисми-лляяhи-ррах̣маани-ррах̣ииим<br> 1. к̣уль-йааа-аййуhаль-кяяфирууун <br> 2. ляяя-аʿбуду-маа-таʿбудуун <br> 3. ва-ляяя-аннтум-ʿаабидууна-мааа-аʿбуд <br> 4. ва-ляяя-ана-ʿаабидум-маа-ʿабадтум <br> 5. ва-ляяя-аннтум-ʿабидууна-мааа-аʿбуд <br> 6. лякум-диинукум-валийадииин '
    }
    , {
      name: 'Аль-Ихлас',
      arabic: 'بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ<br> قُلْ هُوَ اللَّهُ أَحَدٌ  (1)<br> اللَّهُ الصَّمَدُ  (2)<br> لَمْ يَلِدْ وَلَمْ يُولَدْ  (3)<br> وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ  (4)',
      addition: 'Рекомендуется читать во 2-м ракаате намаза за местом Ибрахима',
      rus: 'Скажи: «Он - Аллах Единый, (1) Аллах Самодостаточный. (2) Он не родил и не был рожден, (3) и нет никого равного Ему». (4)',
      trascription: 'бисми-лляяhи-ррах̣маани-ррах̣ииим<br> 1. к̣уль-hувал-лааhу-ах̣ад <br> 2. аллааhус̣-с̣амад <br> 3. лям-йалид-ва-лям-йууляд <br> 4. ва-лям-йакул-ляhуу-куфуван-ах̣ад '
    }
    , {
      name: 'При приближении к Сафе',
      arabic: ' إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ الَّهلِ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلا جُنَاحَ عَلَيْهِ أَنْ يَطَّوَّفَ بِهِمَا وَمَنْ تَطَوَّعَ خَيْراً فَإِنَّ الَّهلَ شَاكِرٌ عَلِيمٌ',
      addition: 'Начните са‘й у холма Сафа. Приблизившись к Сафе, прочтите данное дуа',
      rus: '«Воистину, Сафа и Марва одни из обрядовых знамений Аллаха. Кто совершает хадж к Каабе или ‘умру, тот не совершит греха, если пройдёт между ними. А если кто добровольно совершает доброе дело, то ведь Аллах — Признательный, Знающий» (сура 2 «Аль-Бакара = Корова», аят 158)',
      trascription: 'Инна с-Сафа ва-ль-Марва мин ша‘а’ири Ллях фа-ман хаджжа ль-байта ау и ‘тамара фа-ля джунаха ‘алей-хи ай-йаттаууафа би-хима ва ман татавва‘а хайран фа-инна Ллаха Шакирун ‘Алим'
    }
    , {
      name: 'Дуа на холмах Сафа и Марва',
      arabic: 'الله أكبر الله أكبر الله أكبر . لا إله إلا الله وحده لا شريك له له الملك وله الحمد يحيي ويميت وهو على كل شيء قدير، لا إله إلا الله وحده لا شريك له أنجز وعده ونصر عبده وهزم الأحزاب وحده',
      addition: 'Поднимитесь на холм Сафа (Марва), повернитесь лицом к Каабе и произнесите данное дуа 3 раза. В промежутке после первого и второго раза произнесите те мольбы, которые пожелаете.',
      rus: 'Превелик, Аллах Превелик, Аллах Превелик! Нет божества, кроме Аллаха, у Которого нет сотоварища! Ему принадлежит власть и надлежит хвала, Он оживляет и умерщвляет, и Он властен над всем сущим! Нет божества, кроме Аллаха, у Которого нет сотоварища! Он выполнил Своё обещание, помог Своему рабу и в одиночку разбил враждебные племена.',
      trascription: 'Аллаху акбар! Аллаху акбар! Аллаху акбар! Ля иляха илля Ллаху вахда-ху ля шарика ля-ху! Ля-ху ль-мульку ва ля-ху ль-хамду йухьйи ва йумиту ва хува ‘аля кулли шай’ин кадир! Ля иляха илля Ллаху вахда-ху ля шарика ля-ху анджаза ва‘да-ху ва насара ‘абда-ху ва хазама ль-ахзаба вахда-ху Аллах '
    }
    ,  {
      name: 'Дуа во время са‘й',
      arabic: 'رب اغفر وارحم إنك أنت الأعز الأكرم',
      addition: 'Желательно читать во время са‘й',
      rus: 'Господи, прости и помилуй, ибо Ты — Величайший и Щедрейший!',
      trascription: 'Рабби гфир ва-рхам инна-ка анта ль-а‘аззу ль-акрам'
    }
    ,
      {
      name: 'При выходе из Заповедной мечети',
      arabic: 'اللهم صل على محمد وسلم اللهم اني أسألك من فضلك',
      addition: 'Выйдите из Заповедной мечети с левой ноги, скажите данное дуа',
      rus: 'О Аллах, благослови Мухаммада и ниспошли ему мир! О Аллах, воистину, я прошу Тебя о Милости Твоей!',
      trascription: 'Аллахумма, салли ‘аля Мухаммадин ва саллим! Аллахумма, инни ас’алюка мин фадли-ка!'
    }
    ,{
      name: 'Вхождение в состояние ихрама (Хадж)',
      arabic: 'لبيك اللهم بحجّ',
      addition: 'Произнесите данное дуа при вхождении в состояние ихрама перед Хаджем',
      rus: 'Вот я пред Тобой, о Аллах, совершая Хадж',
      trascription: 'Ляббай-ка Ллахумма би-хадж'
    }
    ,  {
      name: 'После вхождения в ихрам (Хадж)',
      arabic: 'اللهم هذه حجة لا رياء فيها ولا سمعة',
      addition: 'Обратитесь лицом к кибле и произнесите данное дуа',
      rus: 'О Аллах, этот хадж — нет в нем показухи и стремления к славе!',
      trascription: 'Аллахумма хазихи хиджжа ля рийа’ фи-ха ва ля сум‘а'
    }
     , {
      name: 'На Арафате',
      arabic: 'لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير',
      addition: 'Стоя на Арафате обратившись лицом к кибле, воздев вверх руки, читайте данное дуа',
      rus: 'Нет божества, кроме Аллаха, у Которого нет сотоварища! Ему принадлежит власть и надлежит хвала, Он оживляет и умерщвляет, и Он властен над всем сущим!',
      trascription: 'Ля иляха илля Ллаху вахда-ху ля шарика ля-ху! Ля-ху ль-мульку кулли шай’ин кадир!'
    }
    , {
      name: 'Праздничный такбир',
      arabic: 'اَلله اَكْبَرْ اَلله اَكْبَرْ اَلله اَكْبَرْ لاَ إِلَهَ إِلاَّ الله وَالله اَكْبَرْ الله اَكْبَرْ وَللهِ الْحَمْدُ',
      addition: 'Период произнесения такбиров начинается после утренней (фаджр) молитвы в день ‘Арафа и длится включительно до послеобеденной (‘аср) молитвы третьего дня ат-Ташрикъа',
      rus: 'Аллах велик, Аллах велик! Нет божества достойного поклонения кроме Аллаха! Аллах велик, Аллах велик, и Аллаху хвала!',
      trascription: 'Аллаху акбар, Аллаху акбар, Аллаху акбар, Лаилаха илляллаху валлаху акбар, Аллаху акбар ва лиллахиль хамд (три раза)'
    }
    
    ];
  }



  duaTapped(event, dua) {
    this.navCtrl.push(DuaPage, dua);
  }

}
