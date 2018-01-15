import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Rocket here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Rocket extends Actor
{
    public void act() 
    {
       
        if(Greenfoot.isKeyDown("up"))
        {
            move(3);
        }
        if(Greenfoot.isKeyDown("left"))
        {
            turn(-3);
        }
        if(Greenfoot.isKeyDown("right"))
        {
            turn(3);
        }
        if("space".equals(Greenfoot.getKey()))
        {
            fire();
        }
    }
    public void fire()
    {
        Bullet bullet = new Bullet();
        getWorld().addObject(bullet,getX(),getY());
        bullet.setRotation(getRotation());
        bullet.move(40);
        
    }
}
