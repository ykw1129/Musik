export type BannerType = {
    adDispatchJson?: unknown
    adLocation?: unknown
    adSource?: unknown
    adid?: unknown
    encodeId: string
    event?: unknown
    exclusive: boolean
    extMonitor?: unknown
    extMonitorInfo?: unknown
    imageUrl: string
    monitorBlackList?: unknown
    monitorClick?: unknown
    monitorClickList?: unknown
    monitorImpress?: unknown
    monitorImpressList?: unknown
    monitorType?: unknown
    program?: unknown
    scm: string
    song?: unknown
    targetId: number
    targetType: number
    titleColor: string
    typeTitle: string
    url?: unknown
    video?: unknown
}
export type PlayListTagType = {
    id: number
    name: string
    category: categories
    usedCount: number
    type: number
    position: number
    createTime: number
    highQuality: number
    highQualityPos: number
    officialPos: number
}
export type HotTagType = {
    playlistTag: PlayListTagType
    activity: boolean
    hot: boolean
    usedCount: number
    positio: number
    category: categories
    createTime: number
    name: string
    id: number
    type: number
}
export type Tag = {
    id: number
    name: string
    type: number
    category: categories
    hot: boolean
}
export enum categories {
    '语种',
    '风格',
    '场景',
    '情感',
    '主题',
}
export type AuthResponse = {
    loginType: number
    code: number
    account:AccountType
    token:string
    [other:string]:any
}
export type AccountType = {
    id: number
    userName: string
    type: number
    status: number
    whitelistAuthority: number
    createTime: number
    salt: string
    tokenVersion: number
    ban: number
    baoyueVersion: number
    donateVersion: number
    vipType: number
    viptypeVersion: number
    anonimousUser: boolean
    uninitialized: boolean
}
export type RecommendType = {
    id: number
    type: number
    name: string
    copywriter: string
    picUrl: string
    playcount: number
    createTime: number
    creator: CreatorType
    trackCount: number
    userId: number
    alg: string
}
export type CreatorType = {
    mutual: boolean
    remarkName: null
    avatarImgIdStr: number
    backgroundImgIdStr: number
    detailDescription: string
    defaultAvatar: boolean
    expertTags: null
    djStatus: number
    followed: boolean
    backgroundUrl: string
    avatarImgId: number
    backgroundImgId: number
    userId: number
    accountStatus: number
    vipType: number
    province: number
    gender: number
    avatarUrl: string
    authStatus: number
    userType: number
    nickname: string
    birthday: number
    city: number
    description: string
    signature: string
    authority: number
}