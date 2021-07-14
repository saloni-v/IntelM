interface INode {
  uniqueId: string
  componentId: number
  configuration: {}
  connectedTo:string[]
  connectedFrom:string[]
  }
  
  type NodeState = {
    nodes: INode[]
  }
  
  type NodeAction = {
    type: string
    node: INode
  }
  
  type DispatchType = (args: NodeAction) => NodeAction
  //this.props.addNode(
  //  { uniqueId: cloneEl.id, componentId: item.componentId, configuration:{},connectedTo:[],connectedFrom:[] });