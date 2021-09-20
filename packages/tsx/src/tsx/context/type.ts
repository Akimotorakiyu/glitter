export interface Context {
  tag: JsxFunctionComponent<any> | JsxFactoryComponent<any>
  provider: Record<KeyType, unknown>
  onResize: ((target: Element[]) => void)[]
  isConnected: boolean
  onConnected: ((target: Element[]) => void)[]
  onDisonnected: ((target: Element[]) => void)[]
  updater: () => JSX.Element
  render: () => JSX.Element
  props: Record<string, unknown>
  created: boolean
  staticContentNodeInfo: ContentNodeInfo

  dynamicContentNodeInfo: {
    map: Map<string, ContentNodeInfo>
    keyStack: string[]
    depth: number
  }

  children: JSX.Element[]
}

export interface VDomNode {
  node: Element | null
}
export interface VComNode {
  node: Context | null
}

export interface ContentNodeInfo {
  isDynamic: boolean
  domNodeInfo: {
    list: VDomNode[]
    current: 0
  }
  comNodeInfo: {
    list: VComNode[]
    current: 0
  }
}
