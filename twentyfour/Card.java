package com.twentyfour.twentyfour;

public class Card {
    private final String difficulty;
    private final int top, right, bottom, left; // numerical values of the card.

    public Card(String difficulty, int first, int second, int third, int fourth) {
        this.difficulty = difficulty;

        double orderRandomizer = Math.random();
        if (orderRandomizer < .25) {
            this.top = first;
            this.right = second;
            this.bottom = third;
            this.left = fourth;
        } else if (orderRandomizer < .5) {
            this.top = third;
            this.right = fourth;
            this.bottom = first;
            this.left = second;
        } else if (orderRandomizer < .75) {
            this.top = fourth;
            this.right = third;
            this.bottom = second;
            this.left = first;
        } else {
            this.top = second;
            this.right = first;
            this.bottom = fourth;
            this.left = third;
        }
    }

    /* Getter methods accessed by client. */

    public String getDifficulty() {
        return difficulty;
    }

    public int getTop() {
        return top;
    }

    public int getRight() {
        return right;
    }

    public int getBottom() {
        return bottom;
    }

    public int getLeft() {
        return left;
    }
}