


class Node{
    constructor(depth,text,parent,children=[]){
        this.isRoot=parent==null;
        this.depth=depth;
        this.children=children;
        this.parent=parent
        this.text=text
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

    getResultText(depth,nextNodeDict){
        if(depth===-1){
            return "";
        }
        let result="";
        for(let i=0;i<depth;i++){
            result+="      ";

        }
        result+=this.text+"\n";
        nextNodeDict[depth]=true;
        return result;
    }

    toTreeText(depth,text,nextNodeDict={}){
        //再帰
        console.log(depth)
        console.log(this.hasNextSibling())
        nextNodeDict[depth]=this.hasNextSibling();
        
        let result="";
        // if(depth==0){
        //     console.log(this);
        //     result=this.text+"\n";
        // }
        // else if(depth>=1){
        //     let space=(depth<=1?"":"│")+"        ".repeat(Math.max(0,depth-1))+ (this.hasNextSibling()?"├───":"└─");
        //     result=(depth+space+this.text+"\n"); 
        // }
        result=this.getResultText(depth,nextNodeDict)

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

    hasNextSibling(){
        if(!this.parent){
            return false;
        }

        const siblings=this.parent.children;
        for(let i=0;i<siblings.length;i++){
            if(siblings[i]==this){
                if(i==siblings.length-1){
                    return false;
                }else{
                    return true;
                }
            }
        }
        throw new Error("siblingsに含まれていない")
    }
}

class Tree{
    constructor(){
        this.root=new Node(0,"");
    }


    //階層構造を
    toString(){
        return this.root.toString(-1)
    }

    toTreeText(){
        return this.root.toTreeText(-1);
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
    console.log(inputText);
    let lines=inputText.split(/\r\n|\r|\n/);
    console.log(lines)

    
    const tree=createTree(lines);
    console.log(tree);
    let resultText=tree.toTreeText();
    return resultText;
}
