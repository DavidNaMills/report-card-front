import {SUPERADMIN, ADMIN, STAFF} from '../Constants/roles';
import {DUMMY_SCHOOL_ID} from './dummySchool';

export const dummyStaff = [
    {
        _id: '123',
        schoolId: DUMMY_SCHOOL_ID,
        name: 'Shangna',
        role: SUPERADMIN,
        wechat: 'kdhdhd',
        password: '111111',
        email: '1111@1111.com',
        isDisabled: false
    },
    {
        _id: '2',
        schoolId: DUMMY_SCHOOL_ID,
        name: 'krissy',
        role: ADMIN,
        wechat: 'iamadmin',
        password: 'adminadmin',
        email: 'admin@home,com',
        isDisabled: false
    },
    {
        _id: '12',
        schoolId: DUMMY_SCHOOL_ID,
        name: 'Keri',
        role: STAFF,
        wechat: 'qawsedrf',
        password: 'qqqqqq',
        email: 'qqq@aqq.com',
        isDisabled: false
    },
    {
        _id: '33',
        schoolId: DUMMY_SCHOOL_ID,
        name: 'Gary',
        role: STAFF,
        wechat: 'gaz',
        password: 'gazgaz',
        email: 'gaz@douche.com',
        isDisabled: true
    },
    {
        _id: '6675',
        schoolId: DUMMY_SCHOOL_ID,
        name: 'Fon',
        role: STAFF,
        wechat: 'fonny',
        password: 'fonfon',
        email: 'fon@fon.com',
        isDisabled: false
    }
]