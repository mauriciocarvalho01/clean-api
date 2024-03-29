import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'client' })
export class ClientEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id!: number

  @Column({ name: 'name', nullable: true })
  name?: string
}
