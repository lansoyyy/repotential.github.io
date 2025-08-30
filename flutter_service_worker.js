'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3fd2e14c629e98980db64591a89029ab",
"assets/AssetManifest.bin.json": "85f447df52e7812d9e315315c50d07cb",
"assets/AssetManifest.json": "9e1aa62374f84a405634aaf8fa2644c6",
"assets/assets/alubijid.xlsx": "7c2efeeaf8bd36dc0fb93c9e73a00750",
"assets/assets/balingasag.xlsx": "50002cd15eddbd6f6901c4c977ec13da",
"assets/assets/balingoan.xlsx": "a883b3c4e1ea5249d1ba069a4b723cae",
"assets/assets/binuangan.xlsx": "78b19af81d0cbd404f4b46066f049c25",
"assets/assets/claveria.xlsx": "01fd99629361bf77c5f1b7a6203da89c",
"assets/assets/el%2520salvador.xlsx": "f122820e2fe2e0e5dba6eee2dea06ba0",
"assets/assets/Exixting.geojson": "d66609e687e3b1b6c7ee0d07c4b369d3",
"assets/assets/fonts/Baloo2-Bold.ttf": "e6ea43c5e41884cff68110bb88dbdbab",
"assets/assets/fonts/Baloo2-Medium.ttf": "4ad8149153b5d0f27200a938be9298fb",
"assets/assets/fonts/Baloo2-Regular.ttf": "f8f89a31657b9ea44e160870759723a4",
"assets/assets/gingoog%2520city.xlsx": "dce0c1cab9898446aa7cb7fdccd62be5",
"assets/assets/gitagum.xlsx": "97535de8e10549349d185077610a3108",
"assets/assets/images/360_F_883219487_MRW82pOHErmwSQYMzfn0E8BZU7WH85hB.jpg": "c8e25eeedca027ac73e7fbd08492eb35",
"assets/assets/images/Alubijid.PNG": "aee8f23e9a97acb5dff51271f9b1b313",
"assets/assets/images/Balingasag.PNG": "1c8e46f36410e824d413240dc9d63e4a",
"assets/assets/images/Balingoan.PNG": "daefe8baa68fbe47f4336bfba89141a8",
"assets/assets/images/biomass.png": "a32de20d5724f6e08580481a75ede4da",
"assets/assets/images/Claveria.PNG": "c963d1d95199b393550577a27dc29a9e",
"assets/assets/images/El%2520Salvador.PNG": "c56ffe0c9b69a4f4b4dbd7d381742c3e",
"assets/assets/images/Gingoog.PNG": "e16fd115a16419d45f894e2f8113653a",
"assets/assets/images/Gitagum.PNG": "ea28f5e973fb75441f81a04b4350879c",
"assets/assets/images/hydro/0.PNG": "8b27eb83d8669c4c2ff8245c0e2d4051",
"assets/assets/images/hydro/1.PNG": "a46b84abc26afd2c97aff67e112b3169",
"assets/assets/images/hydro/2.PNG": "eaac669897fe7b354b0ec143b87491ec",
"assets/assets/images/hydro/3.PNG": "418935f3ec41ccee8ba19fb617b9d09b",
"assets/assets/images/hydro/4.PNG": "c76875b5f64daa990cdae947e3db63f7",
"assets/assets/images/hydro/5.PNG": "daf375f2938b7f70799bf2ef2f695f44",
"assets/assets/images/hydro/6.PNG": "be312991e7e9091c76607cafdbe8b06b",
"assets/assets/images/hydro/7.PNG": "e802148dde9643241cb8350641cdefaa",
"assets/assets/images/hydro/8.PNG": "d421d5b503102b649e99c87419d327c3",
"assets/assets/images/hydro/9.PNG": "95174edf31255a182db023d194bcc088",
"assets/assets/images/hydro-power.png": "e285f2cfce8750cdd5f044df30bff29f",
"assets/assets/images/images%2520(10).jpeg": "bc6d58fb69e6399e0c29f7d6acb7985d",
"assets/assets/images/images%2520(11).jpeg": "b2a6b8409b2ccf6caa46c9fd4b8622d3",
"assets/assets/images/images%2520(12).jpeg": "9331efc4a8d59e5bdb5445d69d772a17",
"assets/assets/images/images%2520(13).jpeg": "2fe69704a547d46bc4c9d504df731bb3",
"assets/assets/images/images%2520(14).jpeg": "a9c786fedaba231a467c3ba09bebd1de",
"assets/assets/images/images%2520(15).jpeg": "b3ab07768f43ef12c3792d4a784ad60d",
"assets/assets/images/images%2520(16).jpeg": "4e5769da2c5b4a440d6480141cf97dbb",
"assets/assets/images/images%2520(17).jpeg": "2a13c720691ff334c6326306465e69ae",
"assets/assets/images/images%2520(18).jpeg": "642614c9d5871ef1c2aa5f09f75a8baf",
"assets/assets/images/images%2520(6).jpeg": "9dac9e7a78b2aa5ab77a3f2bb0187f5f",
"assets/assets/images/images%2520(7).jpeg": "2760a3db6ebf0273ac7a93fa5180bb5b",
"assets/assets/images/images%2520(8).jpeg": "914f292b6bdfe46d9da32d79c9ad115e",
"assets/assets/images/images%2520(9).jpeg": "bc6d58fb69e6399e0c29f7d6acb7985d",
"assets/assets/images/Initao.PNG": "4e9b6e09786e280ba79650e84bd7291a",
"assets/assets/images/Jasaan.PNG": "30f6bfdc67246b0b60e7188964c6bf79",
"assets/assets/images/Kinoguitan.PNG": "551279154e219e527d83b994f4fccbf1",
"assets/assets/images/Lagonglong.PNG": "eb189667d40148c4affccacac600991b",
"assets/assets/images/Laguindingan.PNG": "37a6f3a6cdd41a8c2e4f06523479318b",
"assets/assets/images/Libertad.PNG": "03a0338a560bd425aa5c4a83deeb1a59",
"assets/assets/images/Logo.png": "e16fc2fe2c924549f31a4d31af850925",
"assets/assets/images/Lugait.PNG": "6bb48d7499fdd4ba060c5aed362a933c",
"assets/assets/images/Magsaysay.PNG": "5b60f4b2e20ae3919d2122405093134b",
"assets/assets/images/Manticao.PNG": "ca6e88678ac16c24982f3991a0e1397f",
"assets/assets/images/MariaCristinaFallsJuly2006.jpg": "805088975a516edf3c94806de6f4583c",
"assets/assets/images/Medina.PNG": "59056e0460e39803e805c5104dda41de",
"assets/assets/images/Naawan.PNG": "0ffd1e46d8a0c550536b557638509559",
"assets/assets/images/Opol.PNG": "54d56301b246278ae2df256ae870734c",
"assets/assets/images/Salay.PNG": "82f44f37aa4b3381c04323ca3a007378",
"assets/assets/images/solar/0.PNG": "3ccd3db42f590a6ba26a0bf3ea0133d5",
"assets/assets/images/solar/1.PNG": "ab850a479d5bfa22728580fe19a669b9",
"assets/assets/images/solar/10.PNG": "f3f7778e327ce9d4c0986616b1bd01bd",
"assets/assets/images/solar/11.PNG": "f034b10a15c97f4a5a6b7f948d4a810c",
"assets/assets/images/solar/12.PNG": "f034b10a15c97f4a5a6b7f948d4a810c",
"assets/assets/images/solar/13.PNG": "f034b10a15c97f4a5a6b7f948d4a810c",
"assets/assets/images/solar/14.PNG": "b57aa95007c0030379516dac2f925a80",
"assets/assets/images/solar/15.PNG": "b57aa95007c0030379516dac2f925a80",
"assets/assets/images/solar/16.PNG": "b57aa95007c0030379516dac2f925a80",
"assets/assets/images/solar/17.PNG": "b57aa95007c0030379516dac2f925a80",
"assets/assets/images/solar/18.PNG": "b57aa95007c0030379516dac2f925a80",
"assets/assets/images/solar/19.PNG": "6a077df017b8129a40777c1166600df7",
"assets/assets/images/solar/2.PNG": "9d9726fc13b0670973f6a945f0191689",
"assets/assets/images/solar/3.PNG": "db83f16207590cda4907de55e17931d9",
"assets/assets/images/solar/4.PNG": "06a39ec42d278109668253e2237e9f4a",
"assets/assets/images/solar/5.PNG": "eee44b57fdaea1d8fb86f0b7a1c00bfe",
"assets/assets/images/solar/6.PNG": "a7d0ea3765cde59e501647126b609823",
"assets/assets/images/solar/7.PNG": "aee0b71e9d272162a100f4cb99667c82",
"assets/assets/images/solar/8.PNG": "f3f7778e327ce9d4c0986616b1bd01bd",
"assets/assets/images/solar/9.PNG": "f3f7778e327ce9d4c0986616b1bd01bd",
"assets/assets/images/solar/Binuangan/1.png": "fdd09c920e36a381a263cfebd48db38d",
"assets/assets/images/solar/Binuangan/11.png": "bb68eb1b72c89de0d1da77b2c2fbbcd9",
"assets/assets/images/solar/Binuangan/2.png": "1d68f4bdfd27c7de7e38d24a959be884",
"assets/assets/images/solar/Binuangan/22.png": "631d0e5304773e5f1271bde89b2bdbc0",
"assets/assets/images/solar/Binuangan/3.png": "a864ae3bddeac789e4fac04ac2528ec5",
"assets/assets/images/solar/Binuangan/33.png": "93e3287d8d7d3e8266f8837267a2bfde",
"assets/assets/images/solar/Binuangan/4.png": "045b3dc2da8679c16af77649f85094f3",
"assets/assets/images/solar/Binuangan/44.png": "a2b184cfa293e169b3dd9c6e3cfeefa3",
"assets/assets/images/solar/Binuangan/5.png": "cec3f7213ab52cc673cee5e299e66003",
"assets/assets/images/solar/Binuangan/55.png": "de044d62cad6dc7bf52461d7f22139db",
"assets/assets/images/solar/Claveria/1.png": "e0f8ad2bf94c335447c2ffc6ebf65bcc",
"assets/assets/images/solar/Claveria/11.png": "ad95eb2e20004fa255f77734af1e0477",
"assets/assets/images/solar/Claveria/2.png": "f45637f9f778ad4fc7c6f88709f39c11",
"assets/assets/images/solar/Claveria/22.png": "57c11732ffc705ea33cea876b4366d31",
"assets/assets/images/solar/Claveria/3.png": "41ab82dc2c8a8f5a318aa624c8823b2c",
"assets/assets/images/solar/Claveria/33.png": "dae9ab9ad950e687f342e8da536164e1",
"assets/assets/images/solar/Claveria/4.png": "db8029b56c497d0f2fe6eb4268b735a0",
"assets/assets/images/solar/Claveria/44.png": "6b5131ae3803c76f65aea0ea0685cc9e",
"assets/assets/images/solar/Claveria/5.png": "cf5c341eaf98e1ac5989f7658dcd0922",
"assets/assets/images/solar/Claveria/55.png": "2c43ec4eea7a2909bf3a243691dcd091",
"assets/assets/images/solar/Claveria/6.png": "341d6f13dc0f0d111080fb130ff55f2d",
"assets/assets/images/solar/Claveria/66.png": "119dff05ff83ed65880adcf4b1d29a82",
"assets/assets/images/solar/Claveria/7.png": "6400e83c9a7c016364d544baa862e06b",
"assets/assets/images/solar/Claveria/77.png": "b8e22f3d1e2b7f3aaf047e625edcc77d",
"assets/assets/images/solar/Claveria/8.png": "321f528182f1fe51399fb2880c15a1d5",
"assets/assets/images/solar/Claveria/88.png": "3b5eee41944e0f930e7b5fd2c27c503f",
"assets/assets/images/solar/Kinoguitan/1.png": "8a9d0b9ded40f93e2eef1ba67ac97138",
"assets/assets/images/solar/Kinoguitan/10.png": "aeeb1e953bb0d873dc88b74a21f52332",
"assets/assets/images/solar/Kinoguitan/1010.png": "6a43bc698b5e283d3c7d0d771cd516ce",
"assets/assets/images/solar/Kinoguitan/11.png": "e427344ed7d9bea3693f429b9ee00761",
"assets/assets/images/solar/Kinoguitan/2.png": "8e5e84d718b1c3e1ec74a96507d631fb",
"assets/assets/images/solar/Kinoguitan/22.png": "73cca1157eca91f18287b5ea6424a682",
"assets/assets/images/solar/Kinoguitan/3.png": "742c7d072556638f8825002e16707bd8",
"assets/assets/images/solar/Kinoguitan/33.png": "9c979810621d766371adb71beb28112b",
"assets/assets/images/solar/Kinoguitan/4.png": "100b46ca604f16bd25a51beed3e01302",
"assets/assets/images/solar/Kinoguitan/44.png": "3730b6655cd7177df30c3729cf86a297",
"assets/assets/images/solar/Kinoguitan/5.png": "fa039ba0ec0cd28fe64be42c5dd791e9",
"assets/assets/images/solar/Kinoguitan/55.png": "b2aed775698e928018524a8800fad151",
"assets/assets/images/solar/Kinoguitan/6.png": "eaa8db4f65e4763219818424f1cb10c8",
"assets/assets/images/solar/Kinoguitan/66.png": "40d715a10432b570f9d6275c6f9b7247",
"assets/assets/images/solar/Kinoguitan/7.png": "b4759e0bc845090c120abf8785f18181",
"assets/assets/images/solar/Kinoguitan/77.png": "f00b6d93e65722506bac25cee62766cc",
"assets/assets/images/solar/Kinoguitan/8.png": "1bacba32b43c01e42959e2de4dbce22f",
"assets/assets/images/solar/Kinoguitan/88.png": "0e3e8bf2b8d70c0a835eeb3b74429ba1",
"assets/assets/images/solar/Kinoguitan/9.png": "c8c044818d0053c70142c5195e591b3a",
"assets/assets/images/solar/Kinoguitan/99.png": "c39fec5dc0771d144c4fc6dda3e33235",
"assets/assets/images/solar/Medina/1.png": "bd6407040ef6386d3a9cdcaa28fff69e",
"assets/assets/images/solar/Medina/10.png": "7481a0b50385f748221f764ceccaa983",
"assets/assets/images/solar/Medina/1010.png": "3fc132252b756d48803874b551adc80f",
"assets/assets/images/solar/Medina/11.png": "a444715c8f56bdea27d9d0a2e3424e54",
"assets/assets/images/solar/Medina/2.png": "9ec5ae80c045fcff9c02c9655b7c82c3",
"assets/assets/images/solar/Medina/22.png": "ef027185c161dff2b41247ef9ac28a63",
"assets/assets/images/solar/Medina/3.png": "56415ebc78e1f0e92552c0cf7915b315",
"assets/assets/images/solar/Medina/33.png": "f3536e3e1028307c673cf9a2eeebaf18",
"assets/assets/images/solar/Medina/4.png": "4037d57055675145bde2089a4157aade",
"assets/assets/images/solar/Medina/44.png": "3d2a3f08d46ec5fe113b549d639305f4",
"assets/assets/images/solar/Medina/5.png": "11744b9d5512a8ccd21866a7e61de242",
"assets/assets/images/solar/Medina/55.png": "7038e63e036393562bd28eca0f8b334e",
"assets/assets/images/solar/Medina/6.png": "1fe29e7570b1497846ccc6249c677a93",
"assets/assets/images/solar/Medina/66.png": "5ad7a7ad4721b7ff40a8abea854bc49f",
"assets/assets/images/solar/Medina/7.png": "bc5fa00e79c225225c9254969af3ffdb",
"assets/assets/images/solar/Medina/77.png": "bacbbe722b226d6c702464081e87ba72",
"assets/assets/images/solar/Medina/8.png": "3219cbbbcc19115b1086f10abf6bf6be",
"assets/assets/images/solar/Medina/88.png": "797d2c780d7bc6bdc54233afed16d7fb",
"assets/assets/images/solar/Medina/9.png": "bd6407040ef6386d3a9cdcaa28fff69e",
"assets/assets/images/solar/Medina/99.png": "99c61f640deba3ea5e0f3586f84397a8",
"assets/assets/images/solar/Salay/1.png": "77aa12ab198f6a793900d9bed7f0747a",
"assets/assets/images/solar/Salay/10.png": "4bde575bd63869aeeabb985df6dc641c",
"assets/assets/images/solar/Salay/1010.png": "e03ba96088042eea1728561ec821fe50",
"assets/assets/images/solar/Salay/11.png": "48cf6d3295018577b211702b1cf55181",
"assets/assets/images/solar/Salay/2.png": "f5fa3dbc2ad526226425c9049d1df43a",
"assets/assets/images/solar/Salay/22.png": "f705c96c61cb525a24fecb31a63a903f",
"assets/assets/images/solar/Salay/3.png": "e9b633571cf90519cb48483ac0ab94d7",
"assets/assets/images/solar/Salay/33.png": "7fc8071c437b47ba2914ac4799f2abaf",
"assets/assets/images/solar/Salay/4.png": "3aaff0391f906ea40acf3a1720aa8e27",
"assets/assets/images/solar/Salay/44.png": "c35714a6b6036fea5cb07e944472d790",
"assets/assets/images/solar/Salay/5.png": "436df0f324c311c0d0c70d089884a41b",
"assets/assets/images/solar/Salay/55.png": "05b1b5af466f01fce199798b87666a27",
"assets/assets/images/solar/Salay/6.png": "854bb9f4ebdc3579607349e344f88cb3",
"assets/assets/images/solar/Salay/66.png": "13ca6b3b0c0044e679516fb6abe9460a",
"assets/assets/images/solar/Salay/7.png": "0a3d3cd3d612052b6ecfd7226443f83f",
"assets/assets/images/solar/Salay/77.png": "5ac1f4f0e910e1bd9e36b798abffee60",
"assets/assets/images/solar/Salay/8.png": "3f4a33ed414f50f21b47910d85876673",
"assets/assets/images/solar/Salay/88.png": "3f686489deb5a23eee3af06842854b51",
"assets/assets/images/solar/Salay/9.png": "cf734b01a7445822b888a8cbbd76102a",
"assets/assets/images/solar/Salay/99.png": "d6322aadb5263dc65f885ddbf77cc990",
"assets/assets/images/solar/Sugbongcogon/1.png": "a8bcac8400a46425da52c1891be7ebc2",
"assets/assets/images/solar/Sugbongcogon/11.png": "311db5bda910c4b099913491e496c91d",
"assets/assets/images/solar/Sugbongcogon/2.png": "9b275f09e4f6ced21820cc9deb701ac3",
"assets/assets/images/solar/Sugbongcogon/22.png": "b2ed0918d946302d5faf63ea64703f1d",
"assets/assets/images/solar/Sugbongcogon/3.png": "218718409ad2161690c04559cc806cb0",
"assets/assets/images/solar/Sugbongcogon/33.png": "1476ffab8232c17cd9a8905eb4f8247e",
"assets/assets/images/solar/Sugbongcogon/4.png": "2d2eff7fa3a211bf2f40168032c8aa9c",
"assets/assets/images/solar/Sugbongcogon/44.png": "beaa35cbe7b9641c6d44f96ee64acdff",
"assets/assets/images/solar/Sugbongcogon/5.png": "297d2c941596ce2e6be240928db47cbf",
"assets/assets/images/solar/Sugbongcogon/55.png": "9d549b8b585d287e0b100360f4117735",
"assets/assets/images/solar/Sugbongcogon/6.png": "62d78e328b92511fdc180635d2e08239",
"assets/assets/images/solar/Sugbongcogon/66.png": "2cda1422889462a8ce4204b64492a693",
"assets/assets/images/solar/Sugbongcogon/7.png": "e28f5ca59f1aae73865489aefd6b2f3f",
"assets/assets/images/solar/Sugbongcogon/77.png": "eb6cf9a6dfd163feda14f05d95eff2e1",
"assets/assets/images/solar/Sugbongcogon/8.png": "5934e576be2e17893140ce84831811b9",
"assets/assets/images/solar/Sugbongcogon/88.png": "1a4a6555c9114edf13dc7f5927136048",
"assets/assets/images/solar/Talisayan/1.png": "5621012854ead71e3ff1d6eefbb2e91c",
"assets/assets/images/solar/Talisayan/10.png": "439fef39432e9dc9f458bcb3413246d5",
"assets/assets/images/solar/Talisayan/1010.png": "729c201ad9785423b04e223b48003655",
"assets/assets/images/solar/Talisayan/11.png": "bef8d03191a8992a14c0d182b8c7007c",
"assets/assets/images/solar/Talisayan/2.png": "5a9ce6ee85361c05d56c15b3f7284a84",
"assets/assets/images/solar/Talisayan/22.png": "7e688328d5693b50f7d5b70c18aa1b26",
"assets/assets/images/solar/Talisayan/3.png": "b5cf0fc27c7afa03179b8392ccc51080",
"assets/assets/images/solar/Talisayan/33.png": "1cf01ee4c2e7fb07c63c903e3e4a43cc",
"assets/assets/images/solar/Talisayan/4.png": "31123d1b62206f86373b66ffa4f1fee2",
"assets/assets/images/solar/Talisayan/44.png": "e8048348cd1cfabe29f8f806c993d4df",
"assets/assets/images/solar/Talisayan/5.png": "d70efe063366a5808838e2e3a89bbe45",
"assets/assets/images/solar/Talisayan/55.png": "9610a735148a491bfb5587216f1ae5c1",
"assets/assets/images/solar/Talisayan/6.png": "5b8be43d627abd6cd4b0ee407398d3a2",
"assets/assets/images/solar/Talisayan/66.png": "19aa0a548df9c7aec3eb81bd66c6ea38",
"assets/assets/images/solar/Talisayan/7.png": "8b78b8cac5868362f0fc73398a862ad0",
"assets/assets/images/solar/Talisayan/77.png": "4181160110db7379471adc2a6b908e94",
"assets/assets/images/solar/Talisayan/8.png": "595d17e9558ee018e526cb938ca4df6e",
"assets/assets/images/solar/Talisayan/88.png": "dbf709f43111f626001ca9195ba3bdf2",
"assets/assets/images/solar/Talisayan/9.png": "51ffff77c68418142c0f607e5617c1dc",
"assets/assets/images/solar/Talisayan/99.png": "163255e98e3196c044dd5d7ccedf60c3",
"assets/assets/images/Solar.png": "14821f1e408e2916c1170206e3ffbd29",
"assets/assets/images/Sugbongcogon.PNG": "5815bf4b1413c266cd907862c0d1761f",
"assets/assets/images/Tagoloan.PNG": "b5470a986c079b94ea469a80b89db14d",
"assets/assets/images/Talisayan.PNG": "69d12837fdd81295a65ffa9f3a382d66",
"assets/assets/images/Villanueva.PNG": "3012808c0a007cd03db619aa10a80bd2",
"assets/assets/images/wind/1.png": "d2680db9f3dde5e1403b6226bd109cda",
"assets/assets/images/wind/10.png": "c3049d66708386ab0b77bb05ee182b68",
"assets/assets/images/wind/11.png": "1f605b4cf3e86790053b6dde5e9e1319",
"assets/assets/images/wind/2.png": "9cf19cd81a0ac90ef67dc61d138bccb1",
"assets/assets/images/wind/3.png": "da2f12d085d62a1161cf4d239a66ad86",
"assets/assets/images/wind/4.png": "91483abf2a23b9081b9f80f5db11d15a",
"assets/assets/images/wind/5.png": "65a5179d367cecce20d0996fe803d03d",
"assets/assets/images/wind/6.png": "1f605b4cf3e86790053b6dde5e9e1319",
"assets/assets/images/wind/7.png": "9cf19cd81a0ac90ef67dc61d138bccb1",
"assets/assets/images/wind/8.png": "c3049d66708386ab0b77bb05ee182b68",
"assets/assets/images/wind/9.png": "9cf19cd81a0ac90ef67dc61d138bccb1",
"assets/assets/images/wind.png": "1132da35ff7c663f482f98af8c09760e",
"assets/assets/initao.xlsx": "2054cef2a042a59a2b9c52bd899512fb",
"assets/assets/jasaan.xlsx": "396956ef070c5e56d737ec8dc2786fa8",
"assets/assets/kinoguitan.xlsx": "acc57504de2e0195ba69bd07e5784053",
"assets/assets/lagonglong.xlsx": "578fa698a68932d57eb0681d02c494a2",
"assets/assets/laguindingan.xlsx": "dc1ff4040837c011ce7ca35e885f959e",
"assets/assets/libertad.xlsx": "8f55f303de9faf42317813fd26721709",
"assets/assets/lugait.xlsx": "646e676bcb220fab1356fd413b7d25a2",
"assets/assets/magsaysay.xlsx": "339de37647809df9a882966ee831a077",
"assets/assets/manticao.xlsx": "ce89f6d4f86700b1813a4ea159d3391a",
"assets/assets/medina.xlsx": "a9d20120090c9268eb510b4d22465ceb",
"assets/assets/naawan.xlsx": "79cd6c83dd52cd3018e7ed82e22546be",
"assets/assets/opol.xlsx": "b734598276a9d22dd0a01513f36fa7da",
"assets/assets/salay.xlsx": "39ce6a5064777b8ad0e3436e130dae08",
"assets/assets/sugbongcogon.xlsx": "8844f9ecfa0788cd7cab1be00bd1b8a6",
"assets/assets/tagoloan.xlsx": "8030e3adec43a5d5a91a0053223e5351",
"assets/assets/talisayan.xlsx": "847903d28baf8bedce6248044d54ef1b",
"assets/assets/villanueva.xlsx": "a669d18edb5fb36dc09d631f5a7e542e",
"assets/FontManifest.json": "925c6508accbe4906e1a084174606fbb",
"assets/fonts/MaterialIcons-Regular.otf": "e17d02d8e032c701085a513a6d55d22e",
"assets/NOTICES": "018c7f7d20563c587802660087f0c509",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "822cfb27345584503c7115b6f053a0a6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "65bfa6149c6c3fe22c7f0e017d1f651d",
"/": "65bfa6149c6c3fe22c7f0e017d1f651d",
"main.dart.js": "4e9faf9dbf143221207373d82fca99d4",
"manifest.json": "3cbdd19ec6a9538d70754b960ff2ec21",
"version.json": "8767b51192ab31155f9adaa2a3ba76c1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
