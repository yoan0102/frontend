import { router } from '@/constants';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.scss';
export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
  return (
    <footer className="footer">
    <a href="https://https://portal.uij.edu.cu/" className="footer">Universidad Jesús Montané Oropesa</a>
  </footer>
  );
};

export default Footer;
