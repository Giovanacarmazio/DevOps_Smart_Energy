# DevOps Smart Energy

Este repositório contém o projeto **DevOps Smart Energy**, desenvolvido como parte da segunda avaliação somativa do curso de pós-graduação da **Pontifícia Universidade Católica do Paraná (PUCPR)**.

## Descrição do Projeto

O objetivo deste projeto é aplicar os principais conceitos de DevOps em um ambiente voltado para a gestão de smart energy, integrando automação de infraestrutura, monitoramento e otimização de processos para projetos de energia inteligente. As práticas de **integração contínua (CI)**, **entrega contínua (CD)**, e **monitoramento** foram implementadas para demonstrar como DevOps pode ser utilizado para aprimorar resiliência e competitividade em ambientes descentralizados.

## Tecnologias Utilizadas

- **Docker**: Para criação e gestão de containers, garantindo consistência entre ambientes.
- **Kubernetes**: Orquestração de containers para escalabilidade e gerenciamento de serviços de energia.
- **Jenkins**: Ferramenta de integração contínua para automação de testes e builds.
- **Terraform**: Gerenciamento de infraestrutura como código (IaC) para provisionamento automático.
- **Prometheus e Grafana**: Monitoramento e visualização de desempenho de serviços em tempo real.

## Estrutura do Repositório

- `src/`: Código fonte da aplicação voltada para gestão de smart energy.
- `jenkins/`: Arquivos de configuração do pipeline Jenkins.
- `terraform/`: Arquivos de configuração para provisionamento da infraestrutura.
- `k8s/`: Manifests do Kubernetes para orquestração.
- `monitoring/`: Configurações do Prometheus e Grafana para monitoramento.
- `docs/`: Documentação detalhada do projeto.

## Como Executar o Projeto

### Pré-requisitos

- Docker instalado.
- Kubernetes configurado.
- Jenkins configurado para execução de pipelines.
- Terraform instalado.
- Acesso ao Prometheus e Grafana para monitoramento.

### Passos para execução

1. **Configurar Infraestrutura:**
   - Acesse a pasta `terraform/` e execute os comandos para provisionar a infraestrutura necessária.

2. **Deploy da Aplicação:**
   - Aplique os manifests localizados na pasta `k8s/` para o deploy da aplicação em containers gerenciados pelo Kubernetes.

3. **Configurar Jenkins:**
   - Na pasta `jenkins/`, importe e configure o pipeline para automatizar o processo de CI/CD.

4. **Monitoramento:**
   - Utilize os arquivos da pasta `monitoring/` para configurar o monitoramento da infraestrutura e dos serviços com Prometheus e Grafana.

## Contribuição

Sinta-se à vontade para abrir *issues* e enviar *pull requests* para melhorar este projeto. Todas as contribuições são bem-vindas!
