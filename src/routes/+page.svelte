<script>
    import { marked } from 'marked';
    export let data;
  </script>
  
  <article class="markdown-body">
    <div>{@html marked(data.content)}</div>
  </article>
  
  <style>
    @import 'github-markdown-css/github-markdown.css';
  
    .markdown-body {
      padding: 20px;
      max-width: 800px;
      min-width: 800px;
      margin: 20px auto;
      border-radius: 10px;
    }
  
    @media (max-width: 800px) {
      .markdown-body {
        min-width: 200px;
      }
    }
  </style>