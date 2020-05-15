

//depth はsystem rootが-1,ユーザー入力は0以上
class Node{
    constructor(depth,text,parent,children=[]){
        this.isRoot=parent==null;
        this.depth=depth;
        this.children=children;
        this.parent=parent
        this.text=text
    }

    static createRoot(){
        return new Node(-1,"",null);
    }

    addChild(childNode){
        this.children.push(childNode);
        childNode.setParent(this);
    }

    toString(depth,text){
        //再帰
        let result="";
        if(depth>=0){
            const space=" ".repeat(depth);
            result=(depth.toString()+space+this.text+"\n"); 
        }

        //一番下の子(葉)の部分
        if(this.children.lenth===0){   
            return result;
        }

        for(const child of this.children){
            result+=child.toString(depth+1,text);
        }
        return result;
    }

    //iだけ上のparentを取得
    getParent(numDepthToParent=1){
        let parent=this;
        for(let i=0;i<numDepthToParent;i++){
            parent=parent.parent;
        }
        return parent;
    }


    getResultText(depth){
        if(depth===-1){
            return "";
        }

        let result="";

        //depth 大きい順、つまり現在のnodeのdepthから始める
        let node=this;
        for(let i=depth-1;i>=0;i--){
            const space1=" "
            const space2="     "

            if(i===depth-1){

                if(node.hasNextSibling()){
                    result="├─"+space1+result;
                }else{
                    result="└─"+space1+result;
                }
                node=node.parent;
                continue;
            }
            if(node.hasNextSibling()){
                result="│"+space2+result;
            }else{
                result=space2+result;
            }

            node=node.parent;
        }
        result+=this.text+"\n";//最後にtextを足す

        return result;
    }


    toTreeText(depth,text){
        let result=this.getResultText(depth);

        //一番下の子(葉)の部分
        if(this.children.lenth===0){   
            return result;
        }

        for(const child of this.children){
            result+=child.toTreeText(depth+1,text);
        }
        return result;
    }

    setParent(node){
        this.parent=node;
        this.isRoot=false;
    }

    hasNextChildNode(){
        if(!this.children){
            return false;
        }


    }

    hasNextSibling(){
        if(!this.parent){
            return false;
        }

        const siblings=this.parent.children;

        for(let i=0;i<siblings.length;i++){
            if(siblings[i]===this){
                // console.log("みつけた"+i)
                //自分が最後の子のとき
                if(i===siblings.length-1){
                    return false;
                }else{
                    return true;
                }
            }
        }
        throw new Error("siblingsに含まれていない")
    }

    //自分を含む子ノードの数を返す
    getNumChildrenNodesIncludingThisNode(nodeCounter=0){
        nodeCounter++;
        if(this.children.length===0){
            return nodeCounter;
        }
        for(const node of this.children){
            nodeCounter=node.getNumChildrenNodesIncludingThisNode(nodeCounter);
        }
        return nodeCounter;

    }

    getMaxDepth(depth=0){
        depth++;
        if(this.children.length===0){
            return depth;
        }

        let dtmp=depth;
        console.log("hi")
        for(const node of this.children){
            const d=node.getMaxDepth(depth);
            console.log(d)

            dtmp=Math.max(dtmp,d);
        }

        return dtmp;
    }
}


class Tree{
    constructor(){
        this.root=new Node(-1,"");
    }


    //階層構造を
    toString(){
        return this.root.toString(-1)
    }

    toTreeText(){
        return this.root.toTreeText(-1);
    }

    getNumNodes(){
        //rootは除く
        return this.root.getNumChildrenNodesIncludingThisNode()-1;
    }

    getMaxDepth(){
        return this.root.getMaxDepth();
    }
}

//始めに出てくる空白の数を数える。
function getNumStartSpace(text){
    let counter=0;
    for(let i=0;i<text.length;i++){
        if(text[i]===' '){
            counter++;
        }else{
            break;
        }
    }
    return counter;
}

//入力したテキストを行ごとに分けたものからtreeを作る。
function createTree(lineArray){
    const tree=new Tree();
    let parent;
    
    //特定のdepthで最後に作られたものを返す
    let lastCreatedNodes={"-1":tree.root};

    for(const line of lineArray){
        const numSpaces=getNumStartSpace(line);

        //親を取得したい、つまり1階層上なので-1
        if(lastCreatedNodes[numSpaces-1]){
            parent=lastCreatedNodes[numSpaces-1];
        }else{
            throw new Error("エラー：階層ごとのこれまでに作られたノードが見つかりません")
        }
        const node=new Node(numSpaces,line.trimStart());
        parent.addChild(node);

        //階層ごとのこれまでに作られたノードを更新
        lastCreatedNodes[numSpaces]=node;
    }
    return tree;
}

export default function convert(inputText){
    let lines=inputText.split(/\r\n|\r|\n/);
    
    const tree=createTree(lines);
    let resultText=tree.toTreeText();
    return resultText;
}
