package com.twentyfour.twentyfour;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;

@CrossOrigin(origins = "https://two4-game-react.onrender.com/play")
@Controller
public class GameController {
    private DeckInitializer deckInitializer = new DeckInitializer();
    private Card[] deck = deckInitializer.initializeDeck(true, true, true);

    /**
     * Fetch the next card; invoked upon client launch and after solving a card.
     * @return A random card from the deck.
     */
    @GetMapping("/getNextCard")
    public ResponseEntity<Card> getNextCard() {
        Card card = deck[(int) (Math.random() * deck.length)];
        return ResponseEntity.ok(card);
    }

    /**
     * Create a new deck to fetch cards from; invoked upon difficulty changes.
     * @param hasEasy Include in the deck?
     * @param hasMedium Include in the deck?
     * @param hasHard Include in the deck?
     */
    @PostMapping("/createNewDeck")
    @ResponseStatus(HttpStatus.OK)
    public void createNewDeck(@RequestParam boolean hasEasy, @RequestParam boolean hasMedium,
                              @RequestParam boolean hasHard) {
        deck = deckInitializer.initializeDeck(hasEasy, hasMedium, hasHard);
    }
}
