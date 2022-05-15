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
    account: AccountType
    token: string
    [other: string]: any
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
export type HighQualityPlayListRequestType = {
    cat?: string
    limit?: number
    before?: number
    order?: 'new' | 'hot'
}
export type HighQualityPlayListResponseType = {
    playlists: PlayListType[]
    code: number
    more: boolean
    lasttime: number
    total: number
}
export type PlayListType = {
    name: string
    id: number
    trackNumberUpdateTime: number
    status: number
    userId: number
    createTime: number
    updateTime: number
    subscribedCount: number
    trackCount: number
    cloudTrackCount: number
    coverImgUrl: string
    coverImgId: number
    description: string
    tags: string[]
    playCount: number
    trackUpdateTime: number
    specialType: number
    totalDuration: number
    creator: CreatorType
    subscribed: null | any
    commentThreadId: string
    newImported: false
    adType: number
    highQuality: true
    privacy: number
    ordered: true
    anonimous: boolean
    coverStatus: number
    recommendInfo: null | string
    shareCount: number
    coverImgId_str: number
    commentCount: number
    copywriter: string
    tag: string
}
export type PlayListResponseType = {
    code: 200
    relatedVideos: any
    playlist: PlayListType
    sharedPrivilege: any
    resEntrance: any
}
export type ArType = {
    id: number
    name: string
    tns: number[]
    alias: number[]
}
export type AlType = {
    id: number
    name: 'string'
    picUrl: 'string'
    tns: unknown[]
    pic_str: unknown
    pic: number
}
export type TracksType = {
    name: string
    id: number
    pst: number
    t: number
    ar: ArType[]
    alia: unknown[]
    pop: number
    st: number
    rt: unknown
    fee: number
    v: number
    crbt: unknown
    cf: unknown
    al: AlType
    dt: number
    hr: unknown
    a: unknown
    cd: number
    no: number
    rtUrl: unknown
    ftype: number
    rtUrls: unknown[]
    djId: number
    copyright: number
    s_id: number
    mark: number
    originCoverType: number
    originSongSimpleData: unknown
    tagPicList: unknown
    resourceState: boolean
    version: number
    songJumpInfo: unknown
    entertainmentTags: unknown
    single: number
    noCopyrightRcmd: unknown
    rurl: unknown
    rtype: number
    mst: number
    cp: number
    mv: number
    publishTime: number

}
export type Song = {
    id: number,
    url: string,
    br: number,
    size: number,
    md5: string,
    code: number,
    expi: number,
    type: string,
    gain: number,
    fee: number,
    uf: string,
    payed: number,
    flag: number,
    canExtend: boolean,
    freeTrialInfo: any,
    level: string,
    encodeType: string,
    urlSource: number
}