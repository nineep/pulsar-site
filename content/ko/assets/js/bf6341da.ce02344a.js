"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[33761],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),f=i,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return t?a.createElement(d,r(r({ref:n},s),{},{components:t})):a.createElement(d,r({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71506:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],p={id:"functions-package",title:"Package Pulsar Functions",sidebar_label:"How-to: Package",original_id:"functions-package"},l=void 0,c={unversionedId:"functions-package",id:"version-2.9.1/functions-package",title:"Package Pulsar Functions",description:"You can package Pulsar functions in Java, Python, and Go. Packaging the window function in Java is the same as packaging a function in Java.",source:"@site/versioned_docs/version-2.9.1/functions-package.md",sourceDirName:".",slug:"/functions-package",permalink:"/ko/docs/functions-package",editUrl:"https://github.com/apache/pulsar/edit/master/site2/versioned_docs/version-2.9.1/functions-package.md",tags:[],version:"2.9.1",frontMatter:{id:"functions-package",title:"Package Pulsar Functions",sidebar_label:"How-to: Package",original_id:"functions-package"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"How-to: Develop",permalink:"/ko/docs/functions-develop"},next:{title:"How-to: Debug",permalink:"/ko/docs/functions-debug"}},s={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Java",id:"java",level:2},{value:"Python",id:"python",level:2},{value:"One python file",id:"one-python-file",level:3},{value:"ZIP file",id:"zip-file",level:3},{value:"PIP",id:"pip",level:3},{value:"Go",id:"go",level:2},{value:"Start Functions in cluster mode",id:"start-functions-in-cluster-mode",level:2}],m={toc:u};function f(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can package Pulsar functions in Java, Python, and Go. Packaging the window function in Java is the same as ",(0,o.kt)("a",{parentName:"p",href:"#java"},"packaging a function in Java"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Currently, the window function is not available in Python and Go."))),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"Before running a Pulsar function, you need to start Pulsar. You can ",(0,o.kt)("a",{parentName:"p",href:"getting-started-docker.md"},"run a standalone Pulsar in Docker"),", or ",(0,o.kt)("a",{parentName:"p",href:"getting-started-helm"},"run Pulsar in Kubernetes"),"."),(0,o.kt)("p",null,"To check whether the Docker image starts, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps")," command."),(0,o.kt)("h2",{id:"java"},"Java"),(0,o.kt)("p",null,"To package a function in Java, complete the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new maven project with a pom file. In the following code sample, the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"mainClass")," is your package name."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-Java"},'\n<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>java-function</groupId>\n    <artifactId>java-function</artifactId>\n    <version>1.0-SNAPSHOT</version>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.apache.pulsar</groupId>\n            <artifactId>pulsar-functions-api</artifactId>\n            <version>2.6.0</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <configuration>\n                    <appendAssemblyId>false</appendAssemblyId>\n                    <descriptorRefs>\n                        <descriptorRef>jar-with-dependencies</descriptorRef>\n                    </descriptorRefs>\n                    <archive>\n                    <manifest>\n                        <mainClass>org.example.test.ExclamationFunction</mainClass>\n                    </manifest>\n                </archive>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>assembly</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <configuration>\n                    <source>8</source>\n                    <target>8</target>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write a Java function."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'\npackage org.example.test;\n\nimport java.util.function.Function;\n\npublic class ExclamationFunction implements Function<String, String> {\n    @Override\n    public String apply(String s) {\n        return "This is my function!";\n    }\n}\n\n')),(0,o.kt)("p",{parentName:"li"}," For the imported package, you can use one of the following interfaces:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Function interface provided by Java 8: ",(0,o.kt)("inlineCode",{parentName:"li"},"java.util.function.Function")),(0,o.kt)("li",{parentName:"ul"},"Pulsar Function interface: ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.pulsar.functions.api.Function"))),(0,o.kt)("p",{parentName:"li"},"The main difference between the two interfaces is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.api.Function")," interface provides the context interface. When you write a function and want to interact with it, you can use context to obtain a wide variety of information and functionality for Pulsar Functions."),(0,o.kt)("p",{parentName:"li"},"The following example uses ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.api.Function")," interface with context."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'\npackage org.example.functions;\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\nimport java.util.Arrays;\npublic class WordCountFunction implements Function<String, Void> {\n   // This function is invoked every time a message is published to the input topic\n    @Override\n    public Void process(String input, Context context) throws Exception {\n       Arrays.asList(input.split(" ")).forEach(word -> {\n           String counterKey = word.toLowerCase();\n           context.incrCounter(counterKey, 1);\n        });\n       return null;\n   }\n }\n\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Package the Java function."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nmvn package\n\n")),(0,o.kt)("p",{parentName:"li"},"After the Java function is packaged, a ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," directory is created automatically. Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," directory to check if there is a JAR package similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"java-function-1.0-SNAPSHOT.jar"),"."))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the Java function."),(0,o.kt)("p",{parentName:"li"}," (1) Copy the packaged jar file to the Pulsar image."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker exec -it [CONTAINER ID] /bin/bash\ndocker cp <path of java-function-1.0-SNAPSHOT.jar>  CONTAINER ID:/pulsar\n\n")),(0,o.kt)("p",{parentName:"li"},"(2) Run the Java function using the following command."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar-admin functions localrun \\\n--classname org.example.test.ExclamationFunction \\\n--jar java-function-1.0-SNAPSHOT.jar \\\n--inputs persistent://public/default/my-topic-1 \\\n--output persistent://public/default/test-1 \\\n--tenant public \\\n--namespace default \\\n--name JavaFunction\n\n")),(0,o.kt)("p",{parentName:"li"},"The following log indicates that the Java function starts successfully."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\n...\n07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n...\n\n")))),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("p",null,"Python Function supports the following three formats:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One python file"),(0,o.kt)("li",{parentName:"ul"},"ZIP file"),(0,o.kt)("li",{parentName:"ul"},"PIP")),(0,o.kt)("h3",{id:"one-python-file"},"One python file"),(0,o.kt)("p",null,"To package a function with ",(0,o.kt)("strong",{parentName:"p"},"one python file")," in Python, complete the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write a Python function."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\nfrom pulsar import Function //  import the Function module from Pulsar\n\n# The classic ExclamationFunction that appends an exclamation at the end\n# of the input\nclass ExclamationFunction(Function):\n  def __init__(self):\n    pass\n\n  def process(self, input, context):\n    return input + '!'\n\n")),(0,o.kt)("p",{parentName:"li"},"In this example, when you write a Python function, you need to inherit the Function class and implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"process()")," method."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"process()")," mainly has two parameters: "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"input")," represents your input.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"context")," represents an interface exposed by the Pulsar Function. You can get the attributes in the Python function based on the provided context object.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install a Python client."),(0,o.kt)("p",{parentName:"li"},"The implementation of a Python function depends on the Python client, so before deploying a Python function, you need to install the corresponding version of the Python client. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\npip install python-client==2.6.0\n\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the Python Function."),(0,o.kt)("p",{parentName:"li"},"(1) Copy the Python function file to the Pulsar image."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker exec -it [CONTAINER ID] /bin/bash\ndocker cp <path of Python function file>  CONTAINER ID:/pulsar\n\n")),(0,o.kt)("p",{parentName:"li"},"(2) Run the Python function using the following command."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar-admin functions localrun \\\n--classname org.example.test.ExclamationFunction \\\n--py <path of Python Function file> \\\n--inputs persistent://public/default/my-topic-1 \\\n--output persistent://public/default/test-1 \\\n--tenant public \\\n--namespace default \\\n--name PythonFunction\n\n")),(0,o.kt)("p",{parentName:"li"},"The following log indicates that the Python function starts successfully."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\n...\n07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n...\n\n")))),(0,o.kt)("h3",{id:"zip-file"},"ZIP file"),(0,o.kt)("p",null,"To package a function with the ",(0,o.kt)("strong",{parentName:"p"},"ZIP file")," in Python, complete the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Prepare the ZIP file."),(0,o.kt)("p",{parentName:"li"},"The following is required when packaging the ZIP file of the Python Function."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},'\nAssuming the zip file is named as `func.zip`, unzip the `func.zip` folder:\n    "func/src"\n    "func/requirements.txt"\n    "func/deps"\n\n')),(0,o.kt)("p",{parentName:"li"},"Take ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/tests/docker-images/latest-version-image/python-examples"},"exclamation.zip")," as an example. The internal structure of the example is as follows."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\n.\n\u251c\u2500\u2500 deps\n\u2502\xa0\xa0 \u2514\u2500\u2500 sh-1.12.14-py2.py3-none-any.whl\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 exclamation.py\n\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the Python Function."),(0,o.kt)("p",{parentName:"li"},"(1) Copy the ZIP file to the Pulsar image."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker exec -it [CONTAINER ID] /bin/bash\ndocker cp <path of ZIP file>  CONTAINER ID:/pulsar\n\n")),(0,o.kt)("p",{parentName:"li"},"(2) Run the Python function using the following command."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar-admin functions localrun \\\n--classname exclamation \\\n--py <path of ZIP file> \\\n--inputs persistent://public/default/in-topic \\\n--output persistent://public/default/out-topic \\\n--tenant public \\\n--namespace default \\\n--name PythonFunction\n\n")),(0,o.kt)("p",{parentName:"li"},"The following log indicates that the Python function starts successfully."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\n...\n07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n...\n\n")))),(0,o.kt)("h3",{id:"pip"},"PIP"),(0,o.kt)("p",null,"The PIP method is only supported in Kubernetes runtime. To package a function with ",(0,o.kt)("strong",{parentName:"p"},"PIP")," in Python, complete the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"functions_worker.yml")," file."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\n#### Kubernetes Runtime ####\ninstallUserCodeDependencies: true\n\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write your Python Function."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\nfrom pulsar import Function\nimport js2xml\n\n# The classic ExclamationFunction that appends an exclamation at the end\n# of the input\nclass ExclamationFunction(Function):\n def __init__(self):\n   pass\n\n def process(self, input, context):\n  // add your logic\n  return input + '!'\n\n")),(0,o.kt)("p",{parentName:"li"},"You can introduce additional dependencies. When Python Function detects that the file currently used is ",(0,o.kt)("inlineCode",{parentName:"p"},"whl")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"installUserCodeDependencies")," parameter is specified, the system uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"pip install")," command to install the dependencies required in Python Function.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate the ",(0,o.kt)("inlineCode",{parentName:"p"},"whl")," file."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\n$ cd $PULSAR_HOME/pulsar-functions/scripts/python\n$ chmod +x generate.sh\n$ ./generate.sh <path of your Python Function> <path of the whl output dir> <the version of whl>\n# e.g: ./generate.sh /path/to/python /path/to/python/output 1.0.0\n\n")),(0,o.kt)("p",{parentName:"li"},"The output is written in ",(0,o.kt)("inlineCode",{parentName:"p"},"/path/to/python/output"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\n-rw-r--r--  1 root  staff   1.8K  8 27 14:29 pulsarfunction-1.0.0-py2-none-any.whl\n-rw-r--r--  1 root  staff   1.4K  8 27 14:29 pulsarfunction-1.0.0.tar.gz\n-rw-r--r--  1 root  staff     0B  8 27 14:29 pulsarfunction.whl\n\n")))),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("p",null,"To package a function in Go, complete the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write a Go function."),(0,o.kt)("p",{parentName:"li"},"Currently, Go function can be ",(0,o.kt)("strong",{parentName:"p"},"only"),' implemented using SDK and the interface of the function is exposed in the form of SDK. Before using the Go function, you need to import "github.com/apache/pulsar/pulsar-function-go/pf". '),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'\nimport (\n    "context"\n    "fmt"\n\n    "github.com/apache/pulsar/pulsar-function-go/pf"\n)\n\nfunc HandleRequest(ctx context.Context, input []byte) error {\n    fmt.Println(string(input) + "!")\n    return nil\n}\n\nfunc main() {\n    pf.Start(HandleRequest)\n}\n\n')),(0,o.kt)("p",{parentName:"li"},"You can use context to connect to the Go function."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'\nif fc, ok := pf.FromContext(ctx); ok {\n    fmt.Printf("function ID is:%s, ", fc.GetFuncID())\n    fmt.Printf("function version is:%s\\n", fc.GetFuncVersion())\n }\n\n')),(0,o.kt)("p",{parentName:"li"},"When writing a Go function, remember that"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"main()"),", you ",(0,o.kt)("strong",{parentName:"p"},"only")," need to register the function name to ",(0,o.kt)("inlineCode",{parentName:"p"},"Start()"),". ",(0,o.kt)("strong",{parentName:"p"},"Only")," one function name is received in ",(0,o.kt)("inlineCode",{parentName:"p"},"Start()"),". ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go function uses Go reflection, which is based on the received function name, to verify whether the parameter list and returned value list are correct. The parameter list and returned value list ",(0,o.kt)("strong",{parentName:"p"},"must be")," one of the following sample functions:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\n func ()\n func () error\n func (input) error\n func () (output, error)\n func (input) (output, error)\n func (context.Context) error\n func (context.Context, input) error\n func (context.Context) (output, error)\n func (context.Context, input) (output, error)\n\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build the Go function."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\ngo build <your Go Function filename>.go\n\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the Go Function."),(0,o.kt)("p",{parentName:"li"},"(1) Copy the Go function file to the Pulsar image."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker exec -it [CONTAINER ID] /bin/bash\ndocker cp <your go function path>  CONTAINER ID:/pulsar\n\n")),(0,o.kt)("p",{parentName:"li"},"(2) Run the Go function with the following command."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\n./bin/pulsar-admin functions localrun \\\n    --go [your go function path] \n    --inputs [input topics] \\\n    --output [output topic] \\\n    --tenant [default:public] \\\n    --namespace [default:default] \\\n    --name [custom unique go function name]\n\n")),(0,o.kt)("p",{parentName:"li"},"The following log indicates that the Go function starts successfully."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\n...\n07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n...\n\n")))),(0,o.kt)("h2",{id:"start-functions-in-cluster-mode"},"Start Functions in cluster mode"),(0,o.kt)("p",null,"If you want to start a function in cluster mode, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"localrun")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," in the commands above. The following log indicates that your function starts successfully."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'\n  "Created successfully"\n\n')),(0,o.kt)("p",null,"For information about parameters on ",(0,o.kt)("inlineCode",{parentName:"p"},"--classname"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--jar"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--py"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--go"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--inputs"),", run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"./bin/pulsar-admin functions")," or see ",(0,o.kt)("a",{parentName:"p",href:"/ko/docs/pulsar-admin#functions"},"here"),"."))}f.isMDXComponent=!0}}]);