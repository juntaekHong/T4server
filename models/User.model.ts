import {Table, Column, Model,CreatedAt,UpdatedAt, HasMany, PrimaryKey } from 'sequelize-typescript';

@Table({
    timestamps: true,
})
export default class User extends Model <User>{
    
    @PrimaryKey
    @Column
    userId: string;

    @Column
    password: string;

    @CreatedAt
    creationDate: Date;
   
    @UpdatedAt
    updatedOn: Date;
}