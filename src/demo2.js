import "tailwindcss/tailwind.css";
import ReactMarkdown from "react-markdown";
const TailStylingComponent = () =>{

const markdownContent = `# Markdown Demo

## Headers

You can create headers using the \`#\` symbol. There are six levels of headers, denoted by the number of \`#\` symbols.

## Emphasis

You can make text *italic* by surrounding it with asterisks (\`*\`) or underscores (\`_\`).  
You can make text **bold** by surrounding it with double asterisks (\`**\`) or double underscores (\`__\`).  
You can also combine them for ***bold italic***.

## Lists

### Unordered List
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

### Ordered List
1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2

## Links

You can create links like this: [OpenAI](https://openai.com).

## Images

You can embed images like this: ![Alt Text](image_url).

## Code

Inline code can be created using backticks like \`this\`.  
For blocks of code, you can use triple backticks:

\`\`\`python
print("Hello, world!")
\`\`\`
`;


  return (
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );

}
export default TailStylingComponent;