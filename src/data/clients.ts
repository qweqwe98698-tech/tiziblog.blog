import type { Client } from '~/types';

/**
 * 梯子Blog 核心品牌跑马灯
 */
export const clients: Client[] = [
  { name: '光速云 (首推)', shape: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18"/>' },
  { name: '暮光加速', shape: '<path d="M4 20 12 4l8 16z"/>' },
  { name: '飞猫云', shape: '<rect x="4" y="4" width="16" height="16" rx="5"/><path d="M9 12h6"/>' },
  { name: '微风网络', shape: '<path d="M12 3.5 20 12l-8 8.5L4 12z"/>' },
  { name: '大佬云', shape: '<circle cx="9" cy="12" r="5.5"/><circle cx="15" cy="12" r="5.5"/>' },
  { name: '星岛梦', shape: '<path d="M5 18V6l7 6 7-6v12"/>' },
  { name: '二猫云', shape: '<circle cx="12" cy="12" r="8.5"/><path d="M7 12h10M12 7v10"/>' },
  { name: '无忧链接', shape: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' },
  { name: '唯兔云', shape: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>' },
  { name: 'Firefly', shape: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>' },
];

export const clientsLabel = '2026 核心严选与实测品牌矩阵';
