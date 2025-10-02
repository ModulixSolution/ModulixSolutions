import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Simple Discord-themed puzzle mini-game
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 3;
    const tileSize = canvas.width / size;
    let tiles: Array<{
      number: number;
      correctX: number;
      correctY: number;
      x: number;
      y: number;
    }> = [];
    let emptyTile = { x: size - 1, y: size - 1 };

    // Initialize puzzle
    const initPuzzle = () => {
      tiles = [];
      for (let i = 0; i < size * size - 1; i++) {
        tiles.push({
          number: i + 1,
          correctX: i % size,
          correctY: Math.floor(i / size),
          x: i % size,
          y: Math.floor(i / size),
        });
      }
      // Shuffle
      for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
      }
      tiles.forEach((tile, index) => {
        tile.x = index % size;
        tile.y = Math.floor(index / size);
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw tiles
      tiles.forEach((tile) => {
        const x = tile.x * tileSize;
        const y = tile.y * tileSize;

        // Draw tile background
        ctx.fillStyle = '#00D4FF';
        ctx.fillRect(x + 2, y + 2, tileSize - 4, tileSize - 4);

        // Draw tile number
        ctx.fillStyle = '#0F0F23';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(
          tile.number.toString(),
          x + tileSize / 2,
          y + tileSize / 2 + 7
        );
      });

      // Draw empty space
      const emptyX = emptyTile.x * tileSize;
      const emptyY = emptyTile.y * tileSize;
      ctx.fillStyle = '#FF6B6B';
      ctx.fillRect(emptyX + 2, emptyY + 2, tileSize - 4, tileSize - 4);
    };

    const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = Math.floor((event.clientX - rect.left) / tileSize);
      const clickY = Math.floor((event.clientY - rect.top) / tileSize);

      // Check if clicked tile can move
      const dx = Math.abs(clickX - emptyTile.x);
      const dy = Math.abs(clickY - emptyTile.y);

      if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
        // Find clicked tile
        const clickedTile = tiles.find(tile => tile.x === clickX && tile.y === clickY);
        if (clickedTile) {
          // Swap with empty tile
          [clickedTile.x, clickedTile.y, emptyTile.x, emptyTile.y] = [
            emptyTile.x, emptyTile.y, clickedTile.x, clickedTile.y
          ];
          draw();

          // Check win condition
          const isWon = tiles.every(tile =>
            tile.x === tile.correctX && tile.y === tile.correctY
          );
          if (isWon) {
            setTimeout(() => {
              alert('🎉 Congratulations! You solved the Discord puzzle!');
              initPuzzle();
              draw();
            }, 100);
          }
        }
      }
    };

    canvas.addEventListener('click', handleClick as any);
    initPuzzle();
    draw();

    return () => canvas.removeEventListener('click', handleClick as any);
  }, []);

  return (
    <footer className="bg-dark-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold logo-font text-cyber-blue mb-4">
              MODULIX
            </h3>
            <p className="text-gray-300 mb-4">
              Transforming Discord into owned hubs for lasting brand relationships
              through authentic engagements and gaming integrations.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-cyber-blue transition-colors"
                aria-label="Discord"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyber-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="mailto:info@modulixsolutions.com"
                className="text-gray-400 hover:text-cyber-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Mini Game */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Discord Puzzle Challenge</h4>
            <p className="text-gray-300 text-sm mb-4">
              Solve the puzzle to unlock a special message! Click adjacent tiles to move them.
            </p>
            <canvas
              ref={canvasRef}
              width={150}
              height={150}
              className="border border-cyber-blue rounded cursor-pointer"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <p className="text-gray-300 mb-2">
              Ready to transform your Discord community?
            </p>
            <p className="text-cyber-blue font-semibold">
              info@modulixsolutions.com
            </p>
            <p className="text-gray-400 text-sm mt-4">
              © 2025 Modulix Solutions LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
