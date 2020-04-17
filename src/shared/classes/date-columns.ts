import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class DateColumns {
    @CreateDateColumn({ name: 'CREATION_DATE', type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'CHANGE_DATE', type: 'timestamp' })
    updatedAt: Date;
}
