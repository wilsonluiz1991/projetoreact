-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 20/12/2020 às 04:09
-- Versão do servidor: 10.4.13-MariaDB
-- Versão do PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletroo`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `idcomentarios` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `msg` varchar(300) DEFAULT NULL,
  `data` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `comentarios`
--

INSERT INTO `comentarios` (`idcomentarios`, `nome`, `msg`, `data`) VALUES
(1, 'Luis', 'Excelente loja', '2020-12-20 01:53:45'),
(2, 'Maria', 'Vou comprar mais', '2020-12-20 01:54:18'),
(3, 'Paulo', 'Quero mais uma geladeira!', '2020-12-20 03:06:26');

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE `produtos` (
  `idprodutos` int(11) NOT NULL,
  `Categoria` varchar(150) NOT NULL,
  `descricao` varchar(500) NOT NULL,
  `preco` decimal(8,2) NOT NULL,
  `preco_venda` decimal(8,2) NOT NULL,
  `imagem` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`idprodutos`, `Categoria`, `descricao`, `preco`, `preco_venda`, `imagem`) VALUES
(37, 'Geladeira', 'Geladeira Electrolux forst free', '4599.00', '4549.00', './imagens/2gel.jpg'),
(38, 'Geladeira', 'Geladeira Electrolux forst free Bottom', '5599.00', '4499.00', './imagens/5gel.jpg'),
(39, 'Geladeira', 'Geladeira Electrolux forst free duplex', '6799.00', '5700.00', './imagens/8gel.jpg'),
(40, 'Geladeira', 'Geladeira Electrolux forst free', '6899.00', '5699.00', './imagens/11gel.jpg'),
(41, 'Fogao', 'Fogão Consul 5 Bocas Inox', '649.00', '549.00', './imagens/1fog.jpg'),
(42, 'Fogao', 'Fogão 4 bocas agata smaltec', '749.00', '699.00', './imagens/4fog.jpg'),
(43, 'Fogao', 'Fogão 4 bocas atlas branco', '749.00', '699.00', './imagens/7fog.jpg'),
(44, 'Fogao', 'Fogão 4 bocas supreme dako', '799.00', '599.00', './imagens/10fog.jpg'),
(45, 'Microondas', 'Microondas 21 litros Panasonic', '549.00', '499.00', './imagens/3mic.jpg'),
(46, 'Microondas', 'Microondas consul 20 litros inox', '699.00', '649.00', './imagens/6mic.jpg'),
(47, 'Microondas', 'Microondas consul 32 litros inox', '649.00', '600.00', './imagens/9mic.jpg'),
(48, 'Microondas', 'Microondas philco 25 litro preto', '799.00', '650.00', './imagens/12mic.jpg'),
(50, 'Lavadora', 'Lavadoura Brastemp 15kg titânio', '4799.00', '4799.00', './imagens/lava2.jpg'),
(51, 'Lavadora', 'Lavadoura Midea Inverter 11Kg Branca', '4649.00', '3600.00', './imagens/lava3.jpg');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`idcomentarios`);

--
-- Índices de tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`idprodutos`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `idcomentarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `idprodutos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
