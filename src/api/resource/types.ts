export type BannerType = {
    adDispatchJson?: unknown
    adLocation?: unknown
    adSource?: unknown
    adid?: unknown
    encodeId: string
    event?: unknown
    exclusive: false
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
    id: number,
    name: string,
    category: categories,
    usedCount: number,
    type: number,
    position: number,
    createTime: number,
    highQuality: number,
    highQualityPos: number,
    officialPos: number
}
export type HotTagType = {
    playlistTag: PlayListTagType,
    activity: boolean,
    hot: boolean,
    usedCount: number,
    positio: number,
    category: categories,
    createTime: number,
    name: string,
    id: number,
    type: number
}
export type Tag = {
    id: number,
    name: string,
    type: number,
    category: categories,
    hot: boolean
}
export enum categories {
    "语种",
    "风格",
    "场景",
    "情感",
    "主题"
}