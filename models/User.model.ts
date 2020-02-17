import {Table, Column, Model,CreatedAt,UpdatedAt, HasMany, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
    timestamps: true,
})
export default class User extends Model <User>{
    
    @PrimaryKey
    @AutoIncrement
    @Column
    userId: number;

    @Column
    userpw: string;

    @Column
    userName: string;

    @CreatedAt
    creationDate: Date;
   
    @UpdatedAt
    updatedOn: Date;
}