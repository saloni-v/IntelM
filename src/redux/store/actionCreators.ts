import { nodeConstants } from './actionTypes';
import ConfigureNode from '../../models/ConfigureNode';
import NodeComp from '../../models/NodeComp';
//import { userService } from '../_services';
//import { history } from '../_helpers';


export const actions = {
    addNode: function(node:NodeComp) {
      return {
        type: nodeConstants.ADD_NODE,
        node: node,
      }
    },
    updateNodeConnection: function(config:ConfigureNode){
      return {
        type:nodeConstants.UPDATE_NODES_CONN,
        config:config
      }
    },
    listNodes: function() {
      return {
        type: nodeConstants.LIST_NODES
      }
    },
    deleteNode: function(id:string) {
      return {
        type: nodeConstants.DELETE_NODE,
        id: id
       }
    },
    updateNodeConfig : function(config:ConfigureNode){
      return {
        type:nodeConstants.UPDATE_NODES,
        config:config
      }
    },
    nodeTypes: function(){
      return{
        type:nodeConstants.TYPE_OF_NODES
      }
    }
  }