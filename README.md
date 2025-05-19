# Instruções para Publicação do Site G7BET no GitHub Pages

Este documento contém instruções detalhadas para publicar o site G7BET no GitHub Pages e posteriormente em um serviço de hospedagem gratuita.

## Estrutura do Projeto

O projeto G7BET está organizado da seguinte forma:

```
projeto_g7bet/
├── index.html              # Página inicial
├── sobre.html             # Página sobre o professor
├── areas-pesquisa.html    # Página de áreas de pesquisa
├── projetos.html          # Página de projetos
├── publicacoes.html       # Página de publicações
├── orientacoes.html       # Página de orientações
├── laboratorio.html       # Página do laboratório LUMEN
├── contato.html           # Página de contato
├── admin.html             # Área administrativa (acesso: admin/admin)
├── css/
│   ├── style.css          # Estilos principais
│   └── admin.css          # Estilos da área administrativa
├── js/
│   └── script.js          # Scripts do site
└── img/                   # Pasta para imagens (vazia por enquanto)
```

## Publicação no GitHub Pages

### Passo 1: Criar um Repositório no GitHub

1. Acesse sua conta no GitHub (https://github.com/)
2. Clique no botão "+" no canto superior direito e selecione "New repository"
3. Nomeie o repositório como `g7bet` (ou outro nome de sua preferência)
4. Deixe o repositório como público
5. Não inicialize o repositório com README, .gitignore ou licença
6. Clique em "Create repository"

### Passo 2: Fazer Upload dos Arquivos

#### Opção 1: Usando a Interface Web do GitHub

1. No seu novo repositório, clique no link "uploading an existing file"
2. Arraste todos os arquivos e pastas do projeto para a área de upload
3. Adicione uma mensagem de commit como "Primeira versão do site G7BET"
4. Clique em "Commit changes"

#### Opção 2: Usando Git (Recomendado)

1. Abra o terminal ou prompt de comando
2. Navegue até a pasta do projeto:
   ```
   cd caminho/para/projeto_g7bet
   ```
3. Inicialize um repositório Git:
   ```
   git init
   ```
4. Adicione todos os arquivos:
   ```
   git add .
   ```
5. Faça o commit:
   ```
   git commit -m "Primeira versão do site G7BET"
   ```
6. Adicione o repositório remoto:
   ```
   git remote add origin https://github.com/seu-usuario/g7bet.git
   ```
7. Envie os arquivos:
   ```
   git push -u origin main
   ```
   (ou `git push -u origin master` dependendo da sua configuração)

### Passo 3: Configurar o GitHub Pages

1. No seu repositório, vá para "Settings" (aba de configurações)
2. Role para baixo até encontrar a seção "GitHub Pages"
3. Em "Source", selecione a branch principal (main ou master)
4. Clique em "Save"
5. Aguarde alguns minutos para que o site seja publicado
6. O GitHub fornecerá um URL no formato `https://seu-usuario.github.io/g7bet/`

## Migração para Hospedagem Gratuita

Quando estiver pronto para migrar para um serviço de hospedagem gratuita, recomendamos:

### Opção 1: Netlify

1. Crie uma conta em https://www.netlify.com/
2. Clique em "New site from Git"
3. Selecione GitHub como provedor
4. Autorize o Netlify a acessar seus repositórios
5. Selecione o repositório `g7bet`
6. Mantenha as configurações padrão e clique em "Deploy site"
7. O Netlify fornecerá um URL aleatório que você pode personalizar nas configurações

### Opção 2: Vercel

1. Crie uma conta em https://vercel.com/
2. Clique em "New Project"
3. Importe o repositório do GitHub
4. Mantenha as configurações padrão e clique em "Deploy"
5. A Vercel fornecerá um URL para seu site

### Opção 3: InfinityFree

1. Crie uma conta em https://infinityfree.net/
2. Acesse o painel de controle e crie um novo site
3. Use o gerenciador de arquivos ou FTP para fazer upload dos arquivos do projeto
4. Configure o domínio fornecido pelo InfinityFree

## Manutenção do Site

### Atualização de Conteúdo

Para atualizar o conteúdo do site:

1. Edite os arquivos HTML correspondentes às páginas que deseja atualizar
2. Se estiver usando Git, faça commit e push das alterações:
   ```
   git add .
   git commit -m "Atualização de conteúdo"
   git push
   ```
3. O GitHub Pages atualizará automaticamente o site em alguns minutos

### Área Administrativa

A área administrativa (admin.html) é apenas uma demonstração e não possui funcionalidade de backend real. Para implementar funcionalidades reais de administração, seria necessário:

1. Desenvolver um backend (usando Node.js, PHP, etc.)
2. Implementar autenticação segura
3. Criar APIs para gerenciamento de conteúdo
4. Hospedar em um serviço que suporte o backend escolhido

## Personalização Adicional

### Adicionando Imagens

1. Coloque suas imagens na pasta `img/`
2. Referencie-as nos arquivos HTML usando o caminho relativo:
   ```html
   <img src="img/nome-da-imagem.jpg" alt="Descrição da imagem">
   ```

### Alterando Informações de Contato

Edite os seguintes arquivos para atualizar informações de contato:

- `index.html`: Seção de contato rápido
- `contato.html`: Página de contato completa
- Rodapé em todos os arquivos HTML

### Alterando Cores e Estilos

Para modificar a aparência do site, edite o arquivo `css/style.css`. As variáveis de cores estão definidas no início do arquivo:

```css
:root {
    /* Cores Primárias */
    --color-primary: #2E3A6B;      /* Azul Marinho UERN */
    --color-white: #FFFFFF;        /* Branco */
    --color-light-gray: #F5F5F5;   /* Cinza Claro */
    
    /* Cores Secundárias */
    --color-secondary: #6A7CB7;    /* Azul Claro */
    --color-accent: #FFA07A;       /* Laranja Pastel */
    --color-success: #8FBC8F;      /* Verde Pastel */
    
    /* Cores de Apoio */
    --color-medium-gray: #AAAAAA;  /* Cinza Médio */
    --color-dark-gray: #444444;    /* Cinza Escuro */
    --color-black: #000000;        /* Preto */
}
```

## Suporte e Ajuda

Para qualquer dúvida ou problema com o site, entre em contato com o desenvolvedor:

- Lucas Vítor Florêncio Borba
- Email: [seu-email@exemplo.com]

---

© 2025 G7BET - Todos os direitos reservados
