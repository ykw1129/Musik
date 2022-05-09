import resource from "."
import { localSet, localGet } from '../../utils/localStorage';
import { Tag, AuthResponse } from './types';
type LoginFormType = {
    phone: string,
    password: string
}

/**
 * @description: 暗箱登录
 * @param {*}
 * @return {*}
 */

export const defaultLogin = () => {
    return resource<LoginFormType, AuthResponse>({
        url: '/login/cellphone',
        method: 'POST',
        data: { phone: '18728147847', password: 'guojian.' },
        withCredentials: true
    })
}