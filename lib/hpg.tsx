'use server';

const SAMap: { [key: string]: string } = {
    '北海道': 'SA41',

    '青森県': 'SA51',
    '岩手県': 'SA52',
    '宮城県': 'SA53',
    '秋田県': 'SA54',
    '山形県': 'SA55',
    '福島県': 'SA56',

    '東京都': 'SA11',
    '神奈川県': 'SA12',
    '埼玉県': 'SA13',
    '千葉県': 'SA14',
    '茨城県': 'SA15',
    '栃木県': 'SA16',
    '群馬県': 'SA17',

    '新潟県': 'SA61',
    '富山県': 'SA62',
    '石川県': 'SA63',
    '福井県': 'SA64',
    '山梨県': 'SA65',
    '長野県': 'SA66',

    '岐阜県': 'SA31',
    '静岡県': 'SA32',
    '愛知県': 'SA33',
    '三重県': 'SA34',

    '滋賀県': 'SA21',
    '京都府': 'SA22',
    '大阪府': 'SA23',
    '兵庫県': 'SA24',
    '奈良県': 'SA25',
    '和歌山県': 'SA26',

    '鳥取県': 'SA71',
    '島根県': 'SA72',
    '岡山県': 'SA73',
    '広島県': 'SA74',
    '山口県': 'SA75',

    '徳島県': 'SA81',
    '香川県': 'SA82',
    '愛媛県': 'SA83',
    '高知県': 'SA84',

    '福岡県': 'SA91',
    '佐賀県': 'SA92',
    '長崎県': 'SA93',
    '熊本県': 'SA94',
    '大分県': 'SA95',
    '宮崎県': 'SA96',
    '鹿児島県': 'SA97',
    '沖縄県': 'SA98',
};

export async function getHpgSearchLink(restaurantName: string, restaurantArea: string) {
    const SA = SAMap[restaurantArea];

    if(!SA) {
        return null;
    }
    return`https://www.hotpepper.jp/${SA}/fwt${encodeURIComponent(restaurantName)}/`;
    // `https://www.hotpepper.jp/CSP/psh010/doBasic?FWT=${encodeURIComponent(restaurantName)}&SA=${SA}`;
}